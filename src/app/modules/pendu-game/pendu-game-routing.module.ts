import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PenduGameComponent } from './pages/game/pendu-game.component';

const routes: Routes = [
{path: '', component: PenduGameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class PenduGameRoutingModule { }
