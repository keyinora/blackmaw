import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'bm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  title = 'Calendar';
  // tiles = [
  //   {text: 'Sunday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Monday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Tuesday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Wednesday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Thursday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Friday', cols: 1, rows: 1, color: '#757575'},
  //   {text: 'Saturday', cols: 1, rows: 1, color: '#757575'}
  // ];

  tiles: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.tiles = db.list('/items');
    db.list('/items').forEach(item => {
      console.log(item);
    });
  }

  ngOnInit() {
  }

}
