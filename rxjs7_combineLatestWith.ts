import { interval, pipe, Observable } from "rxjs";
import { map, take, combineLatestAll, combineLatestWith } from "rxjs/operators";

const count1To5$ = interval(1000).pipe(
  take(5),
  map(i => i + 1)
);

const count6To9$ = interval(1000).pipe(
  take(4),
  map(i => i + 6)
);

count1To5$.pipe(combineLatestWith(count6To9$)).subscribe(console.log)