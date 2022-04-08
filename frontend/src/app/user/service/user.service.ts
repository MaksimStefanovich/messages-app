import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../user";

@Injectable()

export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user`)
  }

   public save(user: User) {
        return this.http.post<User>(`${this.apiServerUrl}/user`, user);
   }

   public  deleteUser(userId: number) {
        return this.http.delete(`${this.apiServerUrl}/user/${userId}`).subscribe(data => {
       console.log(data);
        });
   }


   public getUserById(userId: number): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiServerUrl}/user/${userId}`)
    }

}
