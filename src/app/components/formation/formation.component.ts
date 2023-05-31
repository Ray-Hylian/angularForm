import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Formation } from '../../model/formation';
import { UserService } from 'src/app/service/user-service.service';
import { FormationService } from 'src/app/service/formation-service.service';
import { ConfirmationService } from 'primeng/api';


@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

    formations: Formation[] = [];
    users: User[] = [];

    addingFormation: boolean = false;

    createFormationForm: FormGroup = new FormGroup({
        titleToCreate: new FormControl(""),
        selectedUser: new FormControl()
    });

    selectedFormation: Formation = new Formation;
    updatingFormation: boolean = false;

    updateFormationForm: FormGroup = new FormGroup({
        titleToUpdate: new FormControl("")
    });

    constructor(private formationService: FormationService, private confirmationService: ConfirmationService, private userService: UserService) {
        this.findAll();
    }

    ngOnInit() {
        this.findAll();
    }

    getUsers() {
        this.userService.findAll().subscribe((data: User[]) => {
            this.users = data;
        });
    }

    onSubmitCreateFormation() {
        //console.log(this.createFormationForm.value.titleToCreate, this.createFormationForm.value.selectedUser)
        this.formationService.create(this.createFormationForm.value.titleToCreate, this.createFormationForm.value.selectedUser).subscribe(
            (response: any) => {
                this.findAll();
            }
        );
        this.addingFormation = false;
    }

    addFormation() {
        this.addingFormation = true;
        this.getUsers();
    }

    deleteFormation(formation: Formation) {
        this.formationService.delete(formation).subscribe((data: any) => {
            this.findAll();
        })
    }

    deleteAll() {
        this.formationService.deleteAll().subscribe((data: any) => {
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
        this.formationService.findAll().subscribe((data: Formation[]) => {
            this.formations = data;
        });
    }

    onSubmitUpdateFormation() {
        this.formationService.put(this.selectedFormation.id, this.updateFormationForm.value.titleToUpdate).subscribe(
            (response: any) => {
                this.findAll();
            }
        );
        this.addingFormation = false;
    }

    updateFormation(formation: Formation) {
        this.selectedFormation = formation;
        this.updatingFormation = true;
    }
}