import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() languages: string[];

  @Output() languageHasBenChenged: EventEmitter<string> = new EventEmitter<string>();
  selectLanguage = 'fr';

  // déclaration d'attribut via les getters
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userName(): string {
    if (this.userService.currentUser) {
      return this.userService.currentUser.login;
    }
    return '';
  }


  constructor(private translate: TranslateService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  changeLanguage(lang: string): void {
    this.languageHasBenChenged.emit(lang);
  }

  logOut(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
