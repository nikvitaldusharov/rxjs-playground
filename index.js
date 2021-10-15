const { AsyncSubject } = require('rxjs');
const subject = new AsyncSubject();
const chalk = require('chalk');

subject.subscribe({
  next: (v) => console.log(chalk.redBright(`observerA: ${v}`))
});
 
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
 
subject.subscribe({
  next: (v) => console.log(chalk.greenBright(`observerB: ${v}`))
});
 
subject.next(5);
subject.complete();
 
// Logs:
// observerA: 5
// observerB: 5