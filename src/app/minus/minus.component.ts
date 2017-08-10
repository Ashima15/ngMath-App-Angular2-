import { Component } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent{
    public firstNo : number= 12;
    public secondNo : number = 3;
    public answer : number = 9;
    public generate = true;
    
    generateNo(){
        this.firstNo = Math.floor(Math.random()*53);
        this.secondNo = Math.floor(Math.random()*17);
        this.answer = 0;
        this.generate = false;
    }
    
    generateAns(){
        this.generate = true;
        this.answer = this.firstNo - this.secondNo;
    }
}
