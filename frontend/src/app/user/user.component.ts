import { Component, OnInit } from '@angular/core';
import {UserService} from "./service/user.service";
import {User} from "./user";
import {HttpErrorResponse} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router';
import {UserSettings} from "./userSettings";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]

})
export class UserComponent implements OnInit {
userList: User[] = [];
user: User;

  constructor(private userService: UserService, private router: Router) {
  this.user = new User();}

       userSettings: UserSettings = {
            name: "",
       };

  ngOnInit(): void {
  this.getUsers();
  }

   onSubmit() {
           this.user.name = this.userSettings.name;
           this.userService.save(this.user).subscribe(() => this.goToUsers());
      }

    public getUsers(): void {
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.userList = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
    }

     public deleteUser(userId: number){
      this.userService.deleteUser(userId);
      window.location.reload();
      }

      goToMessage(id: number) {
        this.router.navigate(['/message/' + id])
      }

       goToUsers() {
         this.router.navigate(['/users'])
         window.location.reload();
       }

      reset() {
      window.location.reload();
       }


}
