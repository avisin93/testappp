import { Component, OnInit } from '@angular/core';
import { TriggerService } from 'src/app/common/trigger.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  constructor(private triggerService: TriggerService) { }

  ngOnInit() {
  }
  increment() {
    this.setEventType({ type: 'increment', prevValue: {}, currentValue: 'increment'  });
  }
  decrement() {
    this.setEventType({ type: 'decrement', prevValue: {}, currentValue:  'decrement'  });
  }
  setEventType(event: any) {
    this.triggerService.setEvent(event);
  }
}
