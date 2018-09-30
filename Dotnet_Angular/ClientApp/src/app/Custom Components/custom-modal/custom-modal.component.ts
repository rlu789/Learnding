import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  removeModal(){
    this.modalService.destroy();
  }
}
