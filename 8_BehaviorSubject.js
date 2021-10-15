const { BehaviorSubject } = require('rxjs');
const subject = new BehaviorSubject(0); // 0 is the initial value
const chalk = require('chalk');

subject.subscribe({
  next: (v) => console.log(chalk.redBright(`AAA: ${v}`))
});

subject.next(1);
subject.next(2);

const obs = subject.asObservable();
obs.subscribe({
  next: (v) => console.log(chalk.greenBright(`BBB: ${v}`))
});

subject.next(3);

// Logs
// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3