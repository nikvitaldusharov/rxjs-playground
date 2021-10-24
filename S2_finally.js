const chalk = require('chalk');
const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable, onErrorResumeNext, throwError} = require('rxjs');
const { subscribeOn, observeOn, count, map, switchMap, finalize } = require('rxjs/operators');

const source = of(true).pipe(
    map(x => false),
    switchMap(y => {
        return  throwError(new Error('ERROR IN SWITCH MAP'));
    }),
    finalize(() => {
        console.log(chalk.greenBright('CLEAN UP RESOURCES!'));
    })
);
var subscription = source.subscribe({
    next: data => console.log(data),
    error: error => console.error(chalk.redBright(`${error.message}`))
});
// observable.subscribe(x => console.log(`result = ${x}`));
// //start the class
// observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error));
// observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error), () => console.log("COMPLETE!!"));
console.log(chalk.redBright("END"));
