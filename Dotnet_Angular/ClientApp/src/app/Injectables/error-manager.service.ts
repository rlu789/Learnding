import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService {
    errorManagerObj = {}
    
    constructor() { 
    }

    init(key: string, groups: FormGroup[]): SingleErrorObj { 
        this.errorManagerObj[key] = {
            groups: groups,
        };
        return this.errorManagerObj[key];
    }

    get(key: string): SingleErrorObj{
        return this.errorManagerObj[key]
    }
}

interface SingleErrorObj {
    visible: boolean;
    obs: any;
}
