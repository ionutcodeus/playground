import { Component } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent {
   showSecret= false;
   log: number[]= [];
   
   onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
   }
}
