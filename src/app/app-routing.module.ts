import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes =  [
  { path: 'login', loadChildren: './modules/user/login.module#LoginModule' },
  { path: 'game', canActivate: [AuthGuard], loadChildren: './modules/pendu-game/pendu-game.module#PenduGameModule'},
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
