import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable()
export class UserService {

    currentUser: User;

    // déclaration d'attribut par getter
    get isLoggedIn(): boolean {
        return !!this.currentUser;
    }


    setCurrentUser(login: string): void {
        if (!login && login.length < 3) {
            throw new Error('login invalide');
        }
        this.currentUser = new User();
        this.currentUser.login = login;
    }


    logout(): void {
        this.currentUser = null;
    }
}
