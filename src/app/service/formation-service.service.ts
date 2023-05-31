import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../model/formation';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationsUrl: string;

  constructor(private http: HttpClient) {
    this.formationsUrl = 'http://localhost:8080';
  }

  public get(formation: Formation){
    return this.http.get<Formation>(this.formationsUrl + "/formation/" + formation.id);
  }

  public findAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.formationsUrl + "/all-formations");
  }

  public create(title: string, user: User) {
    return this.http.post<any>(this.formationsUrl + "/create-formation", { title: title, user: user });
  }

  public delete(formation: Formation) {
    return this.http.delete<any>(this.formationsUrl + "/delete-formation/" + formation.id);
  }

  public put(id: number, title: string){
    return this.http.put<any>(this.formationsUrl + "/update-formation", { id:id, title: title });
  }

  public deleteAll(): Observable<Formation[]> {
    return this.http.delete<Formation[]>(this.formationsUrl + "/delete-all-formation");
  }
}