import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorManagerService } from '../../Injectables/error-manager.service'

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  loading = false;
  @Input('text') text: string;
  @Input('errorCollectionKey') errorCollectionKey: string;
  @Output('clickFunc') clickFunc = new EventEmitter();

  constructor(private errorManagerService: ErrorManagerService) { }

  ngOnInit() {
  }

  click(){
    var self = this;
    this.loading = true;
    var observer = {
      complete: () => { self.loading = false; }
    };
    var observable = new Observable();
    observable.subscribe(observer);

    if (this.errorCollectionKey){
      var error = this.errorManagerService.get(this.errorCollectionKey);
      error.obs.subscribe(errorId => {
        if (errorId) {
          this.loading = false;
          document.getElementById(errorId).scrollIntoView({behavior: "smooth"});
        }
        else this.clickFunc.emit(observer); // send the event back up to parent so that parent func can call $event.complete()
      });
    }
    else this.clickFunc.emit(observer); // send the event back up to parent so that parent func can call $event.complete()
  }
}
