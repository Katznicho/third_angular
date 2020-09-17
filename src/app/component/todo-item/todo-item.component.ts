import { Todo } from './../../Model/model';
import { Component, OnInit, Input,EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output()deletedTodo:EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  setCompleted(todo) {
    todo.completed = !todo.completed
    console.log(todo)
  }
  setClass(todo) {
    let completed = {
      'is-completed':this.todo.completed
    }
    return completed
  }
  deleteTodo(todo) {
    this.deletedTodo.emit(todo)
  }
}