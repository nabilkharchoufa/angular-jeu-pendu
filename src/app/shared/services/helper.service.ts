import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    private readonly NFD = 'NFD';
    private readonly PATTERN = /[\u0300-\u036f]/g;
    private readonly UNDERSCORE = '_';
    readonly basicLetters = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'];

    /**
     *
     * @param max retourne un nombre aletoire entre 0 et max
     */
    getRandomInt(max): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     *
     * @param str Retourne une chaine de caractéres normalize en NFD (sans accents)
     */
    normalizeString(str: string): string {
        return str.normalize(this.NFD).replace(this.PATTERN, '').toUpperCase();
    }

    /**
     *
     * @param lettersOfWord hide some letter of lettersOfWord
     */
    hideSomeLetters(lettersOfWord: string[]): string[] {

        const letters = [];

        if (lettersOfWord && lettersOfWord.length > 1) {
            // generate a random index to display only this letter of word
            const randomIndex = this.getRandomInt(lettersOfWord.length);

            lettersOfWord.forEach(letter => {
                // build letters
                letters.push(letter === lettersOfWord[randomIndex] ? letter : this.UNDERSCORE);
            });
        }
        return letters;
    }

}
