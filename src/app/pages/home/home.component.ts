import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public todoList = <any>[]
  public newItem = ""

  constructor(private iconLibraries: NbIconLibraries) { 
    this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('font-awesome');
  }

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
