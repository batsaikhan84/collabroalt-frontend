import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/user.model'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL)
  }
}
