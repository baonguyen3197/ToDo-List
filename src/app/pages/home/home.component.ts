import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public todoList = <any>[]
  public newItem = ""

  constructor() { }

  ngOnInit(): void {

  }
  
  addTask(){
    if (this.newItem == ''){
    }
    else{
      this.todoList.push(this.newItem)
      this.newItem=''
    }
  }

  
}
