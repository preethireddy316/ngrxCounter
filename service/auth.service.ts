import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
constructor(private http:HttpClient){
}

login(email:string,password:string):Observable<any>{
  console.log('success')
  
    return this.http.post('https://ngrx-f6351-default-rtdb.firebaseio.com/v1/accounts:signInWithPassword?key=AIzaSyA2KOcNfsh20OeIO0ooV_HEAvIsMBGV_Oo',{email,password}, { withCredentials: true })
}
}