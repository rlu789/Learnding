using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Sockets;
using System.Net;
using System.IO;
using System.Threading;


namespace ReadifyBank.Interfaces
{
    public class SimpleHTTPServer
    {
        private readonly string[] _indexFiles = {
        "index.html",
        "index.htm",
        "default.html",
        "default.htm"
    };

        private static IDictionary<string, string> _mimeTypeMappings = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase) {
        #region extension to MIME type list
        {".asf", "video/x-ms-asf"},
        {".asx", "video/x-ms-asf"},
        {".avi", "video/x-msvideo"},
        {".bin", "application/octet-stream"},
        {".cco", "application/x-cocoa"},
        {".crt", "application/x-x509-ca-cert"},
        {".css", "text/css"},
        {".deb", "application/octet-stream"},
        {".der", "application/x-x509-ca-cert"},
        {".dll", "application/octet-stream"},
        {".dmg", "application/octet-stream"},
        {".ear", "application/java-archive"},
        {".eot", "application/octet-stream"},
        {".exe", "application/octet-stream"},
        {".flv", "video/x-flv"},
        {".gif", "image/gif"},
        {".hqx", "application/mac-binhex40"},
        {".htc", "text/x-component"},
        {".htm", "text/html"},
        {".html", "text/html"},
        {".ico", "image/x-icon"},
        {".img", "application/octet-stream"},
        {".iso", "application/octet-stream"},
        {".jar", "application/java-archive"},
        {".jardiff", "application/x-java-archive-diff"},
        {".jng", "image/x-jng"},
        {".jnlp", "application/x-java-jnlp-file"},
        {".jpeg", "image/jpeg"},
        {".jpg", "image/jpeg"},
        {".js", "application/x-javascript"},
        {".mml", "text/mathml"},
        {".mng", "video/x-mng"},
        {".mov", "video/quicktime"},
        {".mp3", "audio/mpeg"},
        {".mpeg", "video/mpeg"},
        {".mpg", "video/mpeg"},
        {".msi", "application/octet-stream"},
        {".msm", "application/octet-stream"},
        {".msp", "application/octet-stream"},
        {".pdb", "application/x-pilot"},
        {".pdf", "application/pdf"},
        {".pem", "application/x-x509-ca-cert"},
        {".pl", "application/x-perl"},
        {".pm", "application/x-perl"},
        {".png", "image/png"},
        {".prc", "application/x-pilot"},
        {".ra", "audio/x-realaudio"},
        {".rar", "application/x-rar-compressed"},
        {".rpm", "application/x-redhat-package-manager"},
        {".rss", "text/xml"},
        {".run", "application/x-makeself"},
        {".sea", "application/x-sea"},
        {".shtml", "text/html"},
        {".sit", "application/x-stuffit"},
        {".swf", "application/x-shockwave-flash"},
        {".tcl", "application/x-tcl"},
        {".tk", "application/x-tcl"},
        {".txt", "text/plain"},
        {".war", "application/java-archive"},
        {".wbmp", "image/vnd.wap.wbmp"},
        {".wmv", "video/x-ms-wmv"},
        {".xml", "text/xml"},
        {".xpi", "application/x-xpinstall"},
        {".zip", "application/zip"},
        #endregion
    };
        private Thread _serverThread;
        private string _rootDirectory;
        private HttpListener _listener;
        private int _port;
        private Bank bank;

        public int Port
        {
            get { return _port; }
            private set { }
        }

        /// <summary>
        /// Construct server with given port.
        /// </summary>
        /// <param name="path">Directory path to serve.</param>
        /// <param name="port">Port of the server.</param>
        public SimpleHTTPServer(string path, int port)
        {
            bank = new Bank();
            bank.AccountList.Add(bank.OpenHomeLoanAccount("loan", DateTimeOffset.Now));
            bank.AccountList.Add(bank.OpenSavingsAccount("savings", DateTimeOffset.Now));
            this.Initialize(path, port);
        }

        /// <summary>
        /// Construct server with suitable port.
        /// </summary>
        /// <param name="path">Directory path to serve.</param>
        public SimpleHTTPServer(string path)
        {
            //get an empty port
            TcpListener l = new TcpListener(IPAddress.Loopback, 0);
            l.Start();
            int port = ((IPEndPoint)l.LocalEndpoint).Port;
            l.Stop();
            this.Initialize(path, port);
        }

        /// <summary>
        /// Stop server and dispose all functions.
        /// </summary>
        public void Stop()
        {
            _serverThread.Abort();
            _listener.Stop();
        }

        private IDictionary<string, string> ConvertRequestToDict(string request)
        {
            IDictionary<string, string> convertedData = new Dictionary<string, string>();
            string key = "";
            string value = "";
            // data is either the key value or the data value
            bool isKey = true;
            foreach (char s in request)
            {
                if (s == '=')
                {
                    isKey = false;
                    continue;
                }
                if (s == '&')
                {
                    convertedData.Add(key, value);
                    isKey = true;
                    key = "";
                    value = "";
                    continue;
                }
                if (isKey) key += s;
                if (!isKey) value += s;
            }
            // add the last key val pair
            convertedData.Add(key, value);
            return convertedData;
        }

        private string ConvertResponseToJSONString(IDictionary<string, string> response)
        {
            string ret = "{";
            foreach (KeyValuePair<string, string> entry in response)
            {
                // do something with entry.Value or entry.Key
                ret += "\"" + entry.Key + "\":\"" + entry.Value + "\",";
            }
            ret = ret.Remove(ret.Length - 1);
            ret += "}";
            return ret;
        }

        private void Listen()
        {
            _listener = new HttpListener();
            _listener.Prefixes.Add("http://localhost:" + _port.ToString() + "/");
            _listener.Start();
            while (_listener.IsListening)
            {
                ThreadPool.QueueUserWorkItem(c =>
                {
                    HttpListenerContext context = c as HttpListenerContext;
                    string response = "";
                    try
                    {
                        if (context.Request.HasEntityBody)
                        {
                            Console.WriteLine("Request Made");

                            Stream body = context.Request.InputStream;
                            Encoding encoding = context.Request.ContentEncoding;
                            StreamReader reader = new System.IO.StreamReader(body, encoding);

                            string data = reader.ReadToEnd();
                            IDictionary<string, string> convertedData = ConvertRequestToDict(data);
                            if (convertedData.ContainsKey("request") && convertedData["request"] == "getAccountList")
                            {
                                response = Newtonsoft.Json.JsonConvert.SerializeObject(bank);
                            }
                            else
                            {
                                response = ConvertResponseToJSONString(convertedData);
                            }
                            Console.Write(response);
                            var buf = Encoding.UTF8.GetBytes(response);
                            context.Response.ContentLength64 = buf.Length;
                            context.Response.OutputStream.Write(buf, 0, buf.Length);
                            context.Response.OutputStream.Close();
                        }
                        else
                        {
                            Process(context);
                        }
                    }
                    catch (Exception ex)
                    {

                    }
                }, _listener.GetContext());
            }
        }

        private void Process(HttpListenerContext context)
        {
            string filename = context.Request.Url.AbsolutePath;
            Console.WriteLine(filename);
            filename = filename.Substring(1);

            if (string.IsNullOrEmpty(filename))
            {
                foreach (string indexFile in _indexFiles)
                {
                    if (File.Exists(Path.Combine(_rootDirectory, indexFile)))
                    {
                        filename = indexFile;
                        break;
                    }
                }
            }

            filename = Path.Combine(_rootDirectory, filename);

            if (File.Exists(filename))
            {
                try
                {
                    Stream input = new FileStream(filename, FileMode.Open);

                    //Adding permanent http response headers
                    string mime;
                    context.Response.ContentType = _mimeTypeMappings.TryGetValue(Path.GetExtension(filename), out mime) ? mime : "application/octet-stream";
                    context.Response.ContentLength64 = input.Length;
                    context.Response.AddHeader("Date", DateTime.Now.ToString("r"));
                    context.Response.AddHeader("Last-Modified", System.IO.File.GetLastWriteTime(filename).ToString("r"));

                    byte[] buffer = new byte[1024 * 16];
                    int nbytes;
                    while ((nbytes = input.Read(buffer, 0, buffer.Length)) > 0)
                        context.Response.OutputStream.Write(buffer, 0, nbytes);
                    input.Close();

                    context.Response.StatusCode = (int)HttpStatusCode.OK;
                    context.Response.OutputStream.Flush();
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                }

            }
            else
            {
                context.Response.StatusCode = (int)HttpStatusCode.NotFound;
            }

            context.Response.OutputStream.Close();
        }

        private void Initialize(string path, int port)
        {
            this._rootDirectory = path;
            this._port = port;
            _serverThread = new Thread(this.Listen);
            _serverThread.Start();
        }
    }

    internal class Program
    {
        private static void Main(string[] args)
        {
            string myFolder = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName + "\\Website\\dist\\Website";
            Console.WriteLine(myFolder);
            SimpleHTTPServer myServer;

            //Creating server with specified port
            myServer = new SimpleHTTPServer(myFolder, 8080);

            //Now it is running:
            Console.WriteLine("Server is running on this port: " + myServer.Port.ToString());
        }
    }
}
