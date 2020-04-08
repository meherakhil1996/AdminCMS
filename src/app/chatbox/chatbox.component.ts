import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  providers: [ChatserviceService]
})
export class ChatboxComponent implements OnInit {

  public newMessage: string;
  public messageList:  string[] = [];
  public chat: boolean = false;

  constructor(private chatService: ChatserviceService) { }

  

  ngOnInit(): void {
    
  }

  public join(){
    this.chatService.joinRoom({user:sessionStorage.getItem("AUTH_TOKEN"),room:this.chatService.findSupport()});
    this.chat = true;
  }


  public sendMessage(){
    this.messageList.push(this.newMessage);
    this.newMessage="";
  }

}
