import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './component/keyboard/keyboard.component';
import { AppMaterielModule } from 'src/app/shared/app-materiel.module';
import { PenduGameComponent } from './pages/game/pendu-game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WordService } from '../../shared/services/word.service';
import { LoggerService, UserService } from 'src/app/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/shared/services/helper.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AnimalsData } from 'src/app/core/mock/animals-data';
import { PenduGameRoutingModule } from './pendu-game-routing.module';


@NgModule({
  declarations: [KeyboardComponent, PenduGameComponent],
  imports: [
    PenduGameRoutingModule,
    CommonModule,
    FlexLayoutModule,
    AppMaterielModule,
    HttpClientModule,
    InMemoryWebApiModule.forFeature(AnimalsData, {delay: 500, passThruUnknownUrl: true }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [WordService, LoggerService, HelperService, UserService]
})
export class PenduGameModule { }
