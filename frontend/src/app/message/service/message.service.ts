import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Message} from "../message";

@Injectable()

export class MessageService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getMessageByUserAddresseeId( userAddresseeId:number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServerUrl}/message/addressee/${userAddresseeId}`)
  }

   public getMessageByUserSenderId( userAddresseeId:number): Observable<Message[]> {
      return this.http.get<Message[]>(`${this.apiServerUrl}/message/sender/${userAddresseeId}`)
    }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServerUrl}/message`)
  }

    public save(messageDto: Message) {
      return this.http.post<Message>(`${this.apiServerUrl}/message`, messageDto);
    }

      deleteMessage(messageId: number) {
        return this.http.delete(`${this.apiServerUrl}/message/${messageId}`).subscribe(data => {
             console.log(data);
        });
      }

}
