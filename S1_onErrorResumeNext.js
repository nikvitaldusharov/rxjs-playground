const chalk = require('chalk');
const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable, onErrorResumeNext, throwError } = require('rxjs');
const { subscribeOn, observeOn, count } = require('rxjs/operators');

var source = onErrorResumeNext(
    of(42),
    throwError(() => "error 1"),
    of(56),
    throwError(() => "error 2"),
    of(78)
);
var subscription = source.subscribe(
    data => console.log(data)
);
// observable.subscribe(x => console.log(`result = ${x}`));
// //start the class
// observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error));
// observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error), () => console.log("COMPLETE!!"));
console.log(chalk.redBright("END"));
