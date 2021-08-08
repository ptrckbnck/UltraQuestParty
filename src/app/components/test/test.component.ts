import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  dummy(dummy : any){
    console.log(dummy);
    
  }
}
