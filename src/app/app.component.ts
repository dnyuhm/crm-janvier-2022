import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private obs = new Observable((listX) => {
    listX.next('toto');
  });
  // private subj = new Subject();
  // private behav = new BehaviorSubject(1);
  public title: string = 'crm';
  public sub: Subscription;

  constructor() {
    // console.log(this.obs);
    this.sub = this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.next('tutu');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('tata');
    // this.subj.next(Math.random());
    // this.behav.next(2);
    // this.behav.next(3);
    // this.behav.next(4);
    // this.behav.subscribe((data) => console.log(data));
    // this.behav.next(5);
    // this.behav.next(Math.random());
    // this.behav.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
