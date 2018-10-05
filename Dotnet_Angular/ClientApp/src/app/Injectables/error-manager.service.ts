import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService {
    errorManagerObj = {}
    
    constructor() { 
    }

    init(key: string, groups: FormGroup[]) { 
        this.errorManagerObj[key] = {
            groups: groups,
        };
    }

    get(key: string): SingleErrorObj{
        return this.errorManagerObj[key]
    }
}

interface SingleErrorObj {
    visible: boolean;
    obs: any;
}
