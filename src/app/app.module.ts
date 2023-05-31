import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './service/user-service.service';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';


import { UserListComponent } from './components/user-list/user-list.component';
import { MathCalculationsComponent } from './components/math-calculations/math-calculations.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { SubscriptionService } from './service/subscription-service.service';
import { FormationComponent } from './components/formation/formation.component';
import { FormationService } from './service/formation-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MathCalculationsComponent,
    SubscriptionListComponent,
    FormationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TabMenuModule,
    InputTextModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule
  ],
  providers: [UserService, ConfirmationService, SubscriptionService, FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }