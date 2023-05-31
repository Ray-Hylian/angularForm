import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';
  }

  public get(user: User){
    return this.http.get<User>(this.usersUrl + "/user/" + user.id);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + "/all-users");
  }

  public create(firstname: string, lastname: string, userEmail: string) {
    return this.http.post<any>(this.usersUrl + "/create-user", { firstname: firstname, lastname: lastname, email: userEmail });
  }

  public delete(user: User) {
    return this.http.delete<any>(this.usersUrl + "/delete-user/" + user.id);
  }

  public put(id: number, firstname: string, lastname: string, userEmail: string){
    return this.http.put<any>(this.usersUrl + "/update-user", { id:id, firstname: firstname, lastname: lastname, email: userEmail });
  }

  public deleteAll(): Observable<User[]> {
    return this.http.delete<User[]>(this.usersUrl + "/delete-all-users");
  }
}