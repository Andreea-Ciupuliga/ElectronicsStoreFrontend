import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/UserService/user.service";
import {User} from "../../data/interfaces/user";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private readonly userService:UserService) { }
  public userId="";
  ngOnInit(): void {
  }

  deleteUser(id: string) {
    this.userService.deleteById(id).subscribe((data: User) => {
      console.log(data)
    });
  }
}
