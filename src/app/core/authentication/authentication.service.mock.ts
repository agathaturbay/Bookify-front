import { Observable, of } from 'rxjs';

import { LoginContext } from './authentication.service';
import { Credentials } from './credentials.service';

export class MockAuthenticationService {
  credentials: Credentials | null = {
    email: 'test',
    username: 'lala',
    token: '123',
    role: 'admin',
  };

  login(context: LoginContext): Observable<Credentials> {
    return of({
      email: context.email,
      username: 'lala',
      token: '123456',
      role: 'admin',
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}
