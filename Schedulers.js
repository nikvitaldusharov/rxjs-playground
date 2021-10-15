const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { subscribeOn, observeOn } = require('rxjs/operators');

console.log('###BEGIN###');
var counter = 0;
const source = new Observable(subscriber => {
    console.log(`### EXECUTION OF OBSERVABLE ${counter++} ####`);
    const str = `1 no delay new number`;
    subscriber.next(str);
    setTimeout(() => {
        const str = `2 1000 ms new number`;
        console.log('2 Execution!!:' + str);
        subscriber.next(str);
    }, 1000);
    setTimeout(() => {
        const str = `3 2000 ms new number`;
        console.log('3 Execution!!:' + str);
        subscriber.next(str);
    }, 2000);
    setTimeout(() => {
        const str = `4 4000 ms new number`;
        console.log('4 Execution!!:' + str);
        subscriber.next(str);
    }, 4000);
    setTimeout(() => { subscriber.complete() }, 5000);
});

const changedSource = source.pipe(observeOn(queueScheduler));
changedSource.subscribe(x => {
    console.log('IN SUBSCRIBER!!:');
    console.log(x);
})

console.log('###END###');