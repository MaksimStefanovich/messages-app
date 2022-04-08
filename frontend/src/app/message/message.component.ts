import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "./service/message.service";
import {Message} from "./message";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageSettings} from "./messageSettings";
import {UserService} from "../user/service/user.service";
import {User} from "../user/user";



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MessageService]
})
export class MessageComponent implements OnInit {

  messageList: Message[] =[];
  userList: User[] = [];
  userSenderId: number = 0;
  user: User;
  message: Message;


  constructor(private userService: UserService, private messageService: MessageService, private route: ActivatedRoute, private router: Router) {
    this.message = new Message();
    this.user = new User();
    }

      messageSettings: MessageSettings = {
        content: "",
        userAddresseeId: 0,
        userSenderId: 0
      };



  ngOnInit(): void {
    this.userSenderId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsers();
    this.changeMessageListByUserAddressee();
  }

    onSubmit() {
         this.message.content = this.messageSettings.content;
         this.message.userSenderId = this.userSenderId;
         this.message.userAddresseeId = this.messageSettings.userAddresseeId
         this.messageService.save(this.message).subscribe(() => this.goToMessages());
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

        public changeMessageListByUserAddressee(): void{
         this.messageService.getMessageByUserAddresseeId(this.userSenderId).subscribe(
                 (response: Message[]) => {
                 console.log(this.userSenderId);
                 this.messageList = response;
                 console.log(this.messageList);

                 },
                 (error: HttpErrorResponse) => {
                   alert(error.message);
                 });
         }

          public changeMessageListByUserSender(): void{
          this.messageService.getMessageByUserSenderId(this.userSenderId).subscribe(
          (response: Message[]) => {
          this.messageList = response;
          console.log(this.messageList);
          },
          (error: HttpErrorResponse) => {
          alert(error.message);
          });
          }

      public getMessages(): void {
        this.messageService.getMessages().subscribe(
          (response: Message[]) => {
            this.messageList = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          });
      }

     public deleteMessage(messageId: number){
      this.messageService.deleteMessage(messageId);
      window.location.reload();
      }


      goToUsers() {
        this.router.navigate(['/users'])
      }

      goToMessages() {
       this.router.navigate(['/messages/${userSenderId}'])
       }

        reset() {
          window.location.reload();
        }

}
