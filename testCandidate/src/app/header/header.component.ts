import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TriggerService } from '../common/trigger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  // tslint:disable-next-line: ban-types
  deselected: any = 0;
  selected: any = 0;
  constructor(private triggerService: TriggerService) { }

  ngOnInit() {
    this.subscription = this.triggerService.getEvent().subscribe((data) => {
      if (data.event) {
      if (data.event && data.event.type === 'increment') {
        this.selected++;
        if(this.deselected > 0 && this.selected !== 0){
          this.deselected--;
        }
      } else if (data.event && data.event.type === 'decrement') {
        if(this.selected !== 0){
        this.deselected++;
        }
        if(this.selected > 0){
          this.selected--;
        }
      }
    }
    });
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}


}

