import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../@core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static readonly STORAGE_ACCESS_TOKEN = 'accessToken';

  saveToken(result: LoginReponse) {
    localStorage.setItem(AuthenticationService.STORAGE_ACCESS_TOKEN, result.accessToken);
  }

  getToken(): Token {
    const accessToken = localStorage.getItem(AuthenticationService.STORAGE_ACCESS_TOKEN);
    return Token.fromJson({accessToken});
  }

  getAccessToken(): Observable<string | null> {
    const token = this.getToken();
    if (!token.accessToken) {
      return of(null)
    }

    return of(token.accessToken);
  }
}

export class Token {
  accessToken?: string;

  static fromJson(json: any): Token {
    return Object.assign(new Token(), json);
  }
}

export interface LoginReponse {
  accessToken: string;
  user: User
}
