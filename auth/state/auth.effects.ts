// import { AuthService } from './../../service/auth.service';
// import { Injectable} from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { loginStart, loginSuccess } from "./auth.actions";
// import { exhaustMap,map } from 'rxjs/operators';
// import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs';

// @Injectable()

// export class AuthEffects{
//     constructor(private actions$:Actions,private AuthService:AuthService){

//     }

//  login$=createEffect(()=>{
//         return this.actions$.pipe(
//             ofType(loginStart),
//         exhaustMap((action)=>{
//                 return this.AuthService.login(action.email,action.password).pipe(
//                     map(()=>{
//                 return loginSuccess()
//             }
//             ))
//         }))})

// }

import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

 l=(action: { email: string; password: string; } & TypedAction<"[auth page] login start">)=>{
    return this.authService.login(action.email, action.password).pipe(
        map(() => {

          console.log('success in effects')

          return loginSuccess();
        })
      );
  }

  login$:any = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => this.l(action))
    );
  });
}