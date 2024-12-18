import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, setError } from './auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((actions) =>
        this.authService.login(actions.credentials).pipe(
          map((token) => loginSuccess({ token })),
          catchError((error) => of(setError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
