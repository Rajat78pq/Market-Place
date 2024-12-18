import { createAction, props } from '@ngrx/store';
import Auth from '../model/auth.model';
import Token from '../model/token.model';

export const setError = createAction(
  '[Auth] Set Error',
  props<{ error: any }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: Auth }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: Token }>()
);
