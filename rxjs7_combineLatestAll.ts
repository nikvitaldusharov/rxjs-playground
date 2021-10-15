import { interval, pipe, Observable, of, from } from "rxjs";
import { map, take, combineLatestAll, combineLatestWith } from "rxjs/operators";

const count1To5$ = interval(1000).pipe(
  take(5),
  map(i => i + 1)
);

const count6To9$ = interval(1000).pipe(
  take(4),
  map(i => i + 6)
);

of(count1To5$, count6To9$).pipe(combineLatestAll()).subscribe(console.log)