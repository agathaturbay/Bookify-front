import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginContext, RegistrationContext, CreationContext } from '../authentication/authentication.service';
import { CredentialsService } from '../authentication/credentials.service';

@Injectable()
export class AuthServerProvider {
  constructor(private http: HttpClient, private credentialsService: CredentialsService) {}

  login(credentials: LoginContext): Observable<any> {
    const data = {
      email: credentials.username,
      password: credentials.password,
    };

    console.log(credentials);
    console.log(data);

    return this.http.post('auth/login', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));

    async function authenticateSuccess(this: any, resp: any) {
      const response = {
        email: resp.body.user.email,
        token: resp.body.token.accessToken || null,
        role: resp.body.user.role,
        status: resp.body.status || null,
        message: resp.body.message || null,
      };

      console.log(response);

      if (!response.status && !response.message) {
        this.credentialsService.setCredentials(response);
        console.log(this.credentialsService.credentials);
        return resp.body.user;
      } else {
        return resp.body.status;
      }
    }
  }

  impersonate(credentials: LoginContext): Observable<any> {
    const data = {
      email: credentials.username,
      password: credentials.password,
    };

    return this.http.post('auth/impersonate', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));

    async function authenticateSuccess(this: any, resp: any) {
      const cred = {
        email: resp.body.user.email,
        token: resp.body.token.accessToken,
        role: resp.body.user.role,
      };
      this.credentialsService.setCredentials(cred);
      console.log(this.credentialsService.credentials);
      return resp.body.user;
    }
  }

  register(credentials: RegistrationContext): Observable<any> {
    return this.http.post('auth/register', credentials, { observe: 'response' });
  }

  create(credentials: CreationContext): Observable<any> {
    return this.http.post('auth/create', credentials, { observe: 'response' });
  }

  activate(activationKey: string): Observable<any> {
    const params = new HttpParams().set('activationKey', activationKey);
    return this.http.get('auth/activate', { observe: 'response', params });
  }

  reactivate(reactivationKey: string): Observable<any> {
    const params = new HttpParams().set('reactivationKey', reactivationKey);
    return this.http.get('auth/reactivate', { observe: 'response', params });
  }

  resetPassword(email: string): Observable<any> {
    const data = {
      email,
    };

    return this.http.post('auth/forgot-password', data, { observe: 'response' });
  }

  generateReactivationLink(email: string): Observable<any> {
    const data = {
      email,
    };

    return this.http.post('auth/get-reactlink', data, { observe: 'response' });
  }

  verifyDomain(email: any): Observable<any> {
    return this.http.post(`auth/verifyDomain`, email, { observe: 'response' });
  }
}
