import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../model/subscription';
import { SubscriptionService } from '../../service/subscription-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service.service';

@Component({
    selector: 'app-subscription-list',
    templateUrl: './subscription-list.component.html',
    styleUrls: ['./subscription-list.component.css'],
    providers: [ConfirmationService]
})
export class SubscriptionListComponent implements OnInit {

    subscriptions:  Subscription[] = [];
    users: User[] = [];

    addingSubscription: boolean = false;

    createSubscriptionForm: FormGroup = new FormGroup({
        nameToCreate: new FormControl(""),
        dates: new FormControl(),
        selectedUser: new FormControl()
    });

    selectedSubscription: Subscription = new Subscription;
    updatingSubscription: boolean = false;

    updateSubscriptionForm: FormGroup = new FormGroup({
        nameToUpdate: new FormControl(""),
        startingDateToUpdate: new FormControl(""),
        endingDateToUpdate: new FormControl("")
    });

    constructor(private subscriptionService: SubscriptionService, private confirmationService: ConfirmationService, private userService: UserService) {
        this.findAll();
    }

    ngOnInit() {
        this.findAll();
    }

    getUsers(){
        this.userService.findAll().subscribe((data: User[]) => {
            this.users = data;
          });
        }

    onSubmitCreateSubscription() {
        this.subscriptionService.create(this.createSubscriptionForm.value.nameToCreate, this.createSubscriptionForm.value.dates[0], this.createSubscriptionForm.value.dates[1], this.createSubscriptionForm.value.selectedUser).subscribe(
            (response: any) => {
                this.findAll();
            }
        );
        this.addingSubscription = false;
    }

    addSubscription() {
        this.addingSubscription = true;
        this.getUsers();
    }

    deleteSubscription(subscription: Subscription) {
        this.subscriptionService.delete(subscription).subscribe((data: any) => {
            this.findAll();
        })
    }

    deleteAll() {
        this.subscriptionService.deleteAll().subscribe((data: any) => {
            this.findAll();
        })
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûrs ?',
            accept: () => {
                this.deleteAll();
            }
        });
    }

    findAll() {
        this.subscriptionService.findAll().subscribe((data: Subscription[]) => {
            this.subscriptions = data;
        });
    }

    onSubmitUpdateSubscription() {
        this.subscriptionService.put(this.selectedSubscription.id, this.updateSubscriptionForm.value.nameToUpdate, this.updateSubscriptionForm.value.startingDateToUpdate, this.updateSubscriptionForm.value.endingDateToUpdate).subscribe(
            (response: any) => {
                this.findAll();
            }
        );
        this.addingSubscription = false;
    }

    updateSubscription(subscription: Subscription) {
        this.selectedSubscription = subscription;
        this.updatingSubscription = true;
    }
}