import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = []
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter
  constructor(private todoServive: TodoService) { }
  getTodoList(): void {
    this.todoServive.getTodos().subscribe(todo => this.todoList = todo)
  }
  ngOnInit(): void {
    setClasses(): void {
      let classes = {
        todo: true,
        'is-complete': this.todo.completed
      }
    }
    ontoggle() {
      this.todo.completed = !this.todo.completed;
      this.todoServive.completeTodos()
    }

    this.getTodoList()
    console.log(this.todoList)
  }
}
