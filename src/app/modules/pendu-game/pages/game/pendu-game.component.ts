import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerService } from 'src/app/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Word } from 'src/app/shared/models/word.interface';
import { WordService } from 'src/app/shared/services/word.service';
import { KeyboardComponent } from '../../component/keyboard/keyboard.component';

@Component({
  selector: 'app-pendu-game',
  templateUrl: './pendu-game.component.html',
  styleUrls: ['./pendu-game.component.css']
})
export class PenduGameComponent implements OnInit, OnDestroy {

  @ViewChild(KeyboardComponent) keyBoardChild: KeyboardComponent;

  lettersOfWordToDisplay: string[];
  remainingNumberOfTries: number;
  success: boolean;
  fail: boolean;
  message: string;

  private randomeWordSubscription: Subscription;
  private wordToGuess: string[];

  private readonly MESSAGE_SUCCESS = 'game.message-succes';
  private readonly MESSAGE_FAIL = 'game.message-fail';
  private readonly MESSAGE_INFO = 'game.message-info';

  constructor(private logger: LoggerService, private wordService: WordService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.initRandomWord();
    this.remainingNumberOfTries = 10;
    this.success = false,
    this.fail = false;
    this.message = this.MESSAGE_INFO;
  }

  onLetterHasBenClicked(letter: string): void {
    this.checkLetterClicked(letter);
    this.checkNumberTrialsAndWordWinner();
  }

  checkLetterClicked(letter: string): void {
    const indexsOfLetter =  this.wordService.getAllIndiceOfLetterOfWordToGuess(letter, this.wordToGuess);

    if (indexsOfLetter.length > 0) {
      indexsOfLetter.forEach(i => {
        this.lettersOfWordToDisplay[i] = letter;
      });
    } else {
      this.remainingNumberOfTries--;
    }

    if (this.lettersOfWordToDisplay.indexOf('_') === -1) {
      this.success = true;
      this.message = this.MESSAGE_SUCCESS;
    }
  }

  replay(): void {
    this.ngOnInit();
    this.keyBoardChild.ngOnInit();
  }


  private checkNumberTrialsAndWordWinner(): void {
    if (this.remainingNumberOfTries === 0 && this.lettersOfWordToDisplay.indexOf('_') !== -1) {
      this.fail = true;
      this.message = this.MESSAGE_FAIL;
      this.lettersOfWordToDisplay = this.wordToGuess  ;
    }
  }

  private initRandomWord(): void {
    this.randomeWordSubscription = this.wordService.getRandomWord().subscribe(
      (word: Word) => {
        this.wordToGuess = Array.from(word.value);
        console.log('Je l\'ai laissé pour facilter le test ce n\'est un oublie (y) : ', this.wordToGuess);
        // transform word to array of letters
        this.lettersOfWordToDisplay = this.helperService.hideSomeLetters(this.wordToGuess);
      },
      (error) => {
        this.logger.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.randomeWordSubscription.unsubscribe();
  }

}
