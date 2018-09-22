import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.css']
})
export class ComponentLibraryComponent implements OnInit {
  public error(input: string){
    if (input === undefined || input.length < 3) return true
  }

  btnFunc(time: number){
    return setTimeout(() => {
      return;
    }, time);
  }

  constructor() { }

  ngOnInit() {
  }

}
