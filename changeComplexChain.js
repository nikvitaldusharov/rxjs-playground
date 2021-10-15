const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { subscribeOn, observeOn, map } = require('rxjs/operators');

interval(500).pipe(
    filter((num) => num % 2 === 0),
    take(10),
    map((num) => num * 10)
);

// function takeXEvenNumbers(amount) {
//     return pipe(
//         filter((num) => num % 2 === 0),
//         take(amount)
//     );
// }


// interval(500).pipe(
//     this.takeXEvenNumbers(10),
//     map((num) => num * 10),
// );