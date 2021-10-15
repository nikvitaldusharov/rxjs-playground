const { of, merge, pipe, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { subscribeOn, observeOn, count } = require('rxjs/operators');
const chalk = require('chalk');

console.log(chalk.greenBright('beginning'));

let counter = 0;
const observable = new Observable(subscriber => {
    if (counter === 0) {
      console.log(chalk.yellowBright('EXECUTION'));
    } else {
      console.log(chalk.magentaBright('EXECUTION'));
    }
    const number = Math.floor(Math.random() * 100);
    counter++;
    subscriber.next(number + 1);
    subscriber.next(number + 2);
    subscriber.next(number + 3);
    subscriber.complete();
});

observable.pipe(observeOn(asyncScheduler)).subscribe({
    next: x => { console.log(chalk.yellowBright(`result = ${x}`)) },
    complete: () => { console.log(chalk.yellowBright('COMPLETE'))}
});

observable.pipe(subscribeOn(asyncScheduler)).subscribe({
  next: x => { console.log(chalk.magentaBright(`result = ${x}`)) },
  complete: () => { console.log(chalk.magentaBright('COMPLETE'))}
});

console.log(chalk.greenBright('end'));