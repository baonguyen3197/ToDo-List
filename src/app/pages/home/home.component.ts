import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NbIconLibraries } from '@nebular/theme';
import { Task } from '../../models/todo-task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private iconLibraries: NbIconLibraries,
    private todoService: TodoService,
    public dialog: MatDialog
  ) {
    this.iconLibraries.registerFontPack('font-awesome', {
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.setDefaultPack('font-awesome');
  }

  ngOnInit(): void {}

  // public item: todoItem[]=[]
  public todoList: Array<Task> = [];
  public processList: Array<Task> = [];
  public doneList: Array<Task> = [];
  public task!: Task;

  addTask(t: Task) {
    if (t.title == '') {
      return;
    }
    this.todoList.push(t);
  }

  openDialog() {
    this.dialog.open(MatDialog);
  }

  editTask() {}

  processTask(t: any) {
    // add process list
    //if success -> remove todo list
    // else -> alert errors

    // this.todoList.splice(t.index,1)
    // if(t.index === this.task.index){
    //   this.processList.push(t)
    // }

    // this.todoList.map((item) => {
    //   if(t.id == item.id){
    //     t = this.todoList.splice(indexof(item));
    //     this.processList.push(t)
    //   }
    //   return this.processList
    // });
    
    
  }
}
function indexof(task: Task): number {
  throw new Error('Function not implemented.');
}
