import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'bm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  title = 'Calendar';
  tiles: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {    
    this.tiles = db.list('/item');

    db.list('/items').forEach(item => {
      console.log(item);
    });
  }

  ngOnInit() {
  }

}
