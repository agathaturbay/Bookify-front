import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthServerProvider } from '../provider/auth.provider';
import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  password: string;
  username: string;
  remember?: boolean;
}

export interface RegistrationContext {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface CreationContext {
  username: string;
  email: string;
  password: string;
  role: string;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private authService: AuthServerProvider) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    return this.authService.login(context);
  }

  /**
   * Authenticates the user through impersonation.
   * @param context The user parameters.
   * @return The user credentials.
   */
  impersonate(context: LoginContext): Observable<Credentials> {
    return this.authService.impersonate(context);
  }

  /**
   * Register the user account.
   * @param context The registration parameters.
   * @return The registered user data.
   */
  register(context: RegistrationContext): Observable<Credentials> {
    return this.authService.register(context);
  }

  /**
   * Create the user account.
   * @param context The creation parameters.
   * @return The create user data.
   */
  create(context: CreationContext): Observable<Credentials> {
    return this.authService.create(context);
  }

  /**
   * Activate user account.
   * @param activationKey The activation key.
   * @return The registered user data.
   */
  activate(activationKey: string): Observable<any> {
    return this.authService.activate(activationKey);
  }

  /**
   * Reactivate user account.
   * @param reactivationKey The reactivation key.
   * @return The registered user data.
   */
  reactivate(reactivationKey: string): Observable<any> {
    return this.authService.reactivate(reactivationKey);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }

  generateReactivationLink(email: string): Observable<any> {
    return this.authService.generateReactivationLink(email);
  }

  verifyDomain(email: any): Observable<any> {
    return this.authService.verifyDomain(email);
  }
}
