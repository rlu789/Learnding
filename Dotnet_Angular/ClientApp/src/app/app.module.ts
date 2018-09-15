import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';

import { ExercisesService } from './Services/exercises.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { ExercisesComponent } from './Pages/exercises/exercises.component';
import { ExerciseComponent } from './Components/exercise-component/exercise-component.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    ExercisesComponent,
    ExerciseComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ExercisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
