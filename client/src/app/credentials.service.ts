import { Injectable } from '@angular/core';

@Injectable()
export class CredentialsService {

  private username: string;
  private password: string;
  private authenticated: boolean;

  constructor() { }

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  setAuthenticated(value: boolean) {
    this.authenticated = value;
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
