import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, setError } from './auth.actions';
import { state } from '@angular/animations';
import Auth from '../model/auth.model';
import Token from '../model/token.model';

export interface AuthState {
  loading: boolean;
  error: any;
  credentials: Auth;
  token: Token;
}

export const initialState: AuthState = {
  loading: false,
  error: null,
  credentials: {
    email: '',
    password: '',
  },
  token: {
    token: '',
  },
};

export const authReducer = createReducer(
  initialState,
  on(setError, (state, { error }) => ({ ...state, error, loading: false })),
  on(loginSuccess, (state, { token }) => ({ ...state, token, loading: false }))
);
