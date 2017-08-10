import { Component } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent{
    public firstNo : number= 12;
    public secondNo : number = 3;
    public answer : number = 36;
    public generate = true;
    
    generateNo(){
        this.firstNo = Math.floor(Math.random()*13);
        this.secondNo = Math.floor(Math.random()*17);
        this.answer = 0;
        this.generate = false;
    }
    
    generateAns(){
        this.generate = true;
        this.answer = this.firstNo * this.secondNo;
    }
}