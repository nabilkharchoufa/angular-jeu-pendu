import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Word } from '../models/word.interface';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LoggerService } from 'src/app/core';

@Injectable()
export class WordService {

  private wordsUrl = 'api/words';

  private words: Word[];

  constructor(private http: HttpClient, private logger: LoggerService, private helperService: HelperService) { }

  getRandomWord(): Observable<Word> {
    if (this.words) {
      return of(this.extractRandomAndNormalizeWord(this.words));
    }
    return this.http.get<Word[]>(this.wordsUrl)
      .pipe(
        tap(data => this.logger.debug(JSON.stringify(data))),
        tap(data => this.words = data),
        map(data => {
          return this.extractRandomAndNormalizeWord(data);
        }),
        catchError(this.handleError)
      );
  }


  getAllIndiceOfLetterOfWordToGuess(letter: string, word): number[] {
    return word.reduce((arrayToReturn, element, index) => {
      if (element === letter) {
        arrayToReturn.push(index);
      }
      return arrayToReturn;
    }, []);
  }

  private extractRandomAndNormalizeWord(words: Word[]): Word {
    const randomIndex = this.helperService.getRandomInt(this.words.length);
    const word = this.words[randomIndex];
    word.value = this.helperService.normalizeString(word.value);
    return word;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    this.logger.error(err);
    return throwError(errorMessage);
  }

}
