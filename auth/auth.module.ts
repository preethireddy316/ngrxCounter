import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes:Routes = [{path:'',
children:[{path:"",redirectTo :"login",pathMatch:'full'},{path:'login',component:LoginComponent}
]}]

@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],declarations:[LoginComponent]
})


export class AuthModule{
// jkk
g?:any;
} 