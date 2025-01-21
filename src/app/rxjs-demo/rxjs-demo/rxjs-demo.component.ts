import { Component, OnInit } from '@angular/core';
import { first, Observable, of, single, take, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  protected observable$: Observable<number> = of(1, 2, 3, 4, 5);
  constructor() { }

  executeTakeOne() {
    this.observable$.pipe(take(1)).subscribe(console.log);
  }

  executeFirst() {
    this.observable$.pipe(first()).subscribe(console.log);
  }

  executeSingle() {
    this.observable$.pipe((single())).subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
