import firebase from "firebase/app";

export interface AuthState {
  user?: firebase.User;
  error?: firebase.auth.AuthError;
}
