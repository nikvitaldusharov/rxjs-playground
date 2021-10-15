const { Subject, Observable } = require('rxjs');
const { multicast, refCount } = require('rxjs/operators');
const { guid } = require('./helpers');
const chalk = require('chalk');

const observable = new Observable(subscriber => {
    const id = guid();
    console.log(`EXEC started - ${id}`);
    subscriber.next(`${id} first object`);
    setTimeout((id) => {
        const str = `2 ${Math.random()} new number`;
        console.log(`EXEC 2 - ${id}`);
        subscriber.next(`${id} second object`);
    }, 1000, id);
    setTimeout((id) => {
        const str = `3 ${Math.random()} new number`;
        console.log(`EXEC 3 - ${id}`);
        subscriber.next(`${id} third object`);
    }, 2000, id);
    setTimeout(() => subscriber.complete(), 3000);
});

const subject = new Subject();

subject.subscribe({
    next: (v) => console.log(chalk.redBright(`obsrAAA: ${v}`)),
    complete: () => console.log(chalk.redBright(`obsrAAA complete!`))
  });
subject.subscribe({
    next: (v) => console.log(chalk.greenBright(`obsrBBB: ${v}`)),
    complete: () => console.log(chalk.greenBright(`obsrBBB complete!`))
});

observable.subscribe(subject);
