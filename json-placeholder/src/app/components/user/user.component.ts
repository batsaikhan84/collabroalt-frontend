import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = []

  constructor(private userService: UserService) { }

  getUserList(): void {
    this.userService.getUsers().subscribe(user => this.userList = user)
  }
  ngOnInit(): void {
    this.getUserList()
  }
}
