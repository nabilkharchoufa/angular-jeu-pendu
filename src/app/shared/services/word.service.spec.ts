import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WordService } from './word.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService, UserService } from 'src/app/core';
import { HelperService } from './helper.service';
import { Word } from '../models/Word.interface';

describe('WordService', () => {
  let service: WordService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: LoggerService,
          useFactory: () => new LoggerService(),
        },
        {
          provide: HelperService,
          useFactory: () => new HelperService(),
        },
        {
          provide: UserService,
          useFactory: () => new UserService(),
        },
        WordService

      ]
    });
    injector = getTestBed();
    service = injector.get(WordService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomWord(): should return an random word', () => {
    const words: Word[] = [
      { id: 1, value: 'aardvark' },
      { id: 2, value: 'albatross' },
      { id: 3, value: 'alligator' }
    ];

    service.getRandomWord().subscribe((word: Word) => {
      expect(word != null);
      expect(words.indexOf(word) > -1);
    });

    const req = httpMock.expectOne(`api/words`);
    expect(req.request.method).toBe('GET');
    req.flush(words);
  });


  it('getAllIndiceOfLetterOfWordToGuess: should return all indice of letter of word', () => {
    const letterOfWords = Array.from('aardvark');

    const indexs = service.getAllIndiceOfLetterOfWordToGuess('a', letterOfWords);

    expect(indexs.length === 3);
    expect(indexs[0] === 0);
    expect(indexs[1] === 1);
    expect(indexs[0] === 5);
  });

});
