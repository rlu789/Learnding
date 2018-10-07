import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorManagerService } from '../../Injectables/error-manager.service';
import { IdManagerService } from '../../Injectables/id-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-error-summary',
  templateUrl: './custom-error-summary.component.html',
  styleUrls: ['./custom-error-summary.component.css']
})
export class CustomErrorSummaryComponent implements OnInit {
  @Input('key') key: string;
  @Input('formGroups') formGroups: FormGroup[];
  visible: boolean;
  componentId: string;

  constructor(private errorManagerService: ErrorManagerService,
    private idManagerService: IdManagerService) { }

  ngOnInit() {
    this.componentId = this.idManagerService.generateId('error');
    
    var errObj = this.errorManagerService.init(this.key, this.formGroups);
    errObj.obs = new Observable<string>(observer => {
      this.visible = true;
      if (this.visible) observer.next(this.componentId);
      console.log('Errored');
    });
  }

}
