import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from './message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from './globals';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private socket = io('http://localhost:8000');
  
  constructor(private httpObj:HttpClient) { }

  public joinRoom(data){
    this.socket.emit('join',data);
  }
  
  public findSupport(){
    let url1 = url + 'account';
    

  }
}
