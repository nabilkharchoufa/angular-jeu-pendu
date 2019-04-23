import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Letter } from 'src/app/shared/models/letter.interface';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  letters: Letter[];

  @Output() letterClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() disableAllLetters: boolean;
  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.letters = [];
    this.helperService.basicLetters.forEach(basicLetter => {
      this.letters.push({ value: basicLetter, disable: false });
    });
  }

  choiceLetter(letter: Letter): void {
    letter.disable = true;
    this.letterClicked.emit(letter.value);
  }

}
