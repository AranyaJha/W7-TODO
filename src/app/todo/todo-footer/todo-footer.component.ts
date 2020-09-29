import { TodoListComponent } from './../todo-list/todo-list.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  numb: any
  constructor(private shared:SharedService) {

  }

  ngOnInit(): void {
    this.numb=this.shared.getMessage()
  }

}
