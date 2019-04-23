import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    debug(msg: string) {
        console.log(msg);
    }

    error(msg: string) {
        console.error(msg);
    }
}
