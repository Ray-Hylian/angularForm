import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../model/subscription';
import { User } from '../model/user';

@Injectable()
export class SubscriptionService {

  private subscriptionsUrl: string;

  constructor(private http: HttpClient) {
    this.subscriptionsUrl = 'http://localhost:8080';
  }

  public get(subscription: Subscription){
    return this.http.get<Subscription>(this.subscriptionsUrl + "/subscription/" + subscription.id);
  }

  public findAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.subscriptionsUrl + "/all-subscriptions");
  }

  public create(name: string, startingDate: string, endingDate: string, user: User) {
    return this.http.post<any>(this.subscriptionsUrl + "/create-subscription", { name: name, startingDate: startingDate, endingDate: endingDate, user: user });
  }

  public delete(subscription: Subscription) {
    return this.http.delete<any>(this.subscriptionsUrl + "/delete-subscription/" + subscription.id);
  }

  public put(id: number, name: string, startingDate: string, endingDate: string){
    return this.http.put<any>(this.subscriptionsUrl + "/update-subscription", { id:id, name: name, startingDate: startingDate, endingDate: endingDate });
  }

  public deleteAll(): Observable<Subscription[]> {
    return this.http.delete<Subscription[]>(this.subscriptionsUrl + "/delete-all-subscription");
  }
}
