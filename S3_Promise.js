const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable, onErrorResumeNext, throwError} = require('rxjs');
const { subscribeOn, observeOn, count, map, switchMap, finalize } = require('rxjs/operators');

const chalk = require('chalk');
console.log(chalk.redBright("BEGIN"));
const promise = new Promise(function(resolve, reject) {
    resolve("I am resolved");
});
promise.then(x => console.log(x));
console.log(chalk.redBright("END"));