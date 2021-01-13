import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoURL: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoURL)
  }
  getTodo(): Observable<Todo[]> {
    const url = `${this.todoURL}/${todo.id}`
    return this.http.get<[Todo]>(this.todoURL)
  }
}
