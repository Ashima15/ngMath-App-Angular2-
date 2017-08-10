import { Component } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent{
    public firstNo : number= 12;
    public secondNo : number = 3;
    public answer : number = 4;
    public generate = true;
    
    generateNo(){
        this.firstNo = Math.floor(Math.random()*13);
        this.secondNo = Math.floor(Math.random()*17);
        this.answer = 0;
        this.generate = false;
    }
    
    generateAns(){
        this.generate = true;
        this.answer = this.firstNo / this.secondNo;
    }
}