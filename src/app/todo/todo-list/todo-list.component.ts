import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[{
    label: "Get the groceries"
  },
{
  label:"Complete all college assignments"
},
{
  label:"Bake a cake"
},
{
  label:"Order a laptop"
}];
lengthoflist=this.todos.length;
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.shared.setMessage(this.lengthoflist)
  }

}
