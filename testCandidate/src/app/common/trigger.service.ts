import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TriggerService {
    private subject = new BehaviorSubject<any>([]);

    constructor() { }

    setEvent(event: any) {
        this.subject.next({ event });
    }
    getEvent() {
        return this.subject.asObservable();
    }
}
