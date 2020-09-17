import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Model/model'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Todo[];
  newObj: Todo;
  addedTodo: string;

  constructor() { }

  ngOnInit() {
    this.addedTodo = "";
    this.todo = [
      {
        id: 1,
        todo: "chilling",
        val: 0,
        completed:false
      },
      {
        id: 2,
        todo: "coding",
        val: 0,
        completed:false
      },
      {
        id: 3,
        todo: "dating",
        val: 0,
        completed:false
      },
      {
        id: 4,
        todo: "chilling",
        val: 0,
        completed:false
      }
    ]
  }
  getTodo(event) {
    this.addedTodo = event
    
  }
  handleTodo() {
    const getObj = this.todo.slice(-1)[0]
    const newId = getObj.id + 1;
    this.newObj = {
      id: newId,
      todo: this.addedTodo,
      val: 0,
      completed:false
    }
    this.addedTodo = "";
    this.todo.push(this.newObj)  
  }
  getDeleted(todo:Todo) {
    this.todo = this.todo.filter(todos=>todos.id !== todo.id)
    
  }
}
