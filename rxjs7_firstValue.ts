import { interval, firstValueFrom, lastValueFrom } from "rxjs";
import { map, take } from "rxjs/operators";

const count1To5$ = interval(1000).pipe(
  take(5),
  map(i => i + 1)
);

firstValueFrom(count1To5$).then(console.log);
// (after ~1s) 1

lastValueFrom(count1To5$).then(console.log);
// (after ~5s) 5