import { fromEvent, interval, Observable, of } from 'rxjs';
import { exhaustMap, take, delay } from 'rxjs/operators';

const clicks = new Observable(subscriber => {
  subscriber.next("imm");
  setTimeout(() => {
    subscriber.next("after 1 sec");
  }, 1000)
  setTimeout(() => {
    subscriber.next("after 2 sec");
  }, 2000)
  setTimeout(() => {
    subscriber.complete();
  }, 3000)
});
const result = clicks.pipe(
  exhaustMap(x => of(x, x, x).pipe(delay(1000)))
);
result.subscribe(x => console.log(x));