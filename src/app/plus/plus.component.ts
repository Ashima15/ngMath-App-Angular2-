import { Component } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent{
    public firstNo : number= 12;
    public secondNo : number = 3;
    public answer : number = 15;
    public generate = true;
    
    generateNo(){
        this.firstNo = Math.floor(Math.random()*13);
        this.secondNo = Math.floor(Math.random()*17);
        this.answer = 0;
        this.generate = false;
    }
    
    generateAns(){
        this.generate = true;
        this.answer = this.firstNo + this.secondNo;
    }
}
