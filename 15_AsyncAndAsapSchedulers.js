const {  asapScheduler, asyncScheduler } = require('rxjs');
const chalk = require('chalk');

console.log(chalk.greenBright('beginning'));

asyncScheduler.schedule(() => console.log(chalk.blue('async'))); // scheduling 'async' first...
asapScheduler.schedule(() => console.log(chalk.redBright('asap')));
 
console.log(chalk.greenBright('end'));
// Logs:
// observerA: 5
// observerB: 5