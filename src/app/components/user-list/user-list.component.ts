import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ConfirmationService]
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  addingUser: boolean = false;

  createUserForm: FormGroup = new FormGroup({
    firstnameToCreate: new FormControl(""),
    lastnameToCreate: new FormControl(""),
    emailToCreate: new FormControl("")
  });

  selectedUser: User = new User;
  updatingUser: boolean = false;

  updateUserForm: FormGroup = new FormGroup({
    firstnameToUpdate: new FormControl(""),
    lastnameToUpdate: new FormControl(""),
    emailToUpdate: new FormControl("")
  });

  constructor(private userService: UserService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.findAll();
  }

  onSubmitCreate() {
    this.userService.create(this.createUserForm.value.firstnameToCreate, this.createUserForm.value.lastnameToCreate, this.createUserForm.value.emailToCreate).subscribe(
      (response: any) => {
        this.findAll();
      }
    );
    this.addingUser = false;
  }

  addUser(){
    this.addingUser = true;
  }

  deleteUser(user: User){
    this.userService.delete(user).subscribe((data: any) => {
      this.findAll();
    })
  }

  deleteAll(){
    this.userService.deleteAll().subscribe((data:any)=> {
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

  findAll(){
    this.userService.findAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSubmitUpdate() {
    this.userService.put(this.selectedUser.id, this.updateUserForm.value.firstnameToUpdate, this.updateUserForm.value.lastnameToUpdate, this.updateUserForm.value.emailToUpdate).subscribe(
      (response: any) => {
        this.findAll();
      }
    );
    this.addingUser = false;
  }

  updateUser(user: User){
   this.selectedUser = user;
   this.updatingUser = true;
  }
}