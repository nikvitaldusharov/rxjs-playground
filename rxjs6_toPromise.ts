import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

const count1To5$ = interval(1000).pipe(
  take(5),
  map(i => i + 1)
);

count1To5$.toPromise().then(console.log);
// (after ~5s) 5