import { Injectable } from '@angular/core';

import { User } from '../domain/user';
import { Jwt } from '../domain/jwt';

@Injectable()
export class AuthenticationService {
  jwt(): Jwt {
    return JSON.parse(sessionStorage.getItem('user')) as Jwt;
  }

  login(user: User): Jwt {
    var data = new Date();
    data.setDate(data.getDate() + 1);

    var jwt = new Jwt()
    jwt.Email = user.Email;
    jwt.Timeout = data;
    jwt.Token = "token";

    sessionStorage.setItem('user', JSON.stringify(jwt));

    return jwt;
  }

  refresh(user: User): Jwt {
    throw Error("Not implemented.");
  }

  revoke(): void {
    throw Error("Not implemented.");
  }
}
