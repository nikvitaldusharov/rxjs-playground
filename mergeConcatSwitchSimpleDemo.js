const { Observable, from } = require('rxjs');

const { map, concatAll, mergeAll } = require('rxjs/operators');

setTimeout(testFunc, 1000);

const foo1 = (arg) => {
    console.log(`in PROMISE ${arg}`);
    const timeout = arg === '2' ? 0 : 3000;
    return from(new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`in SETTIMEOUT PROMISE ${arg}`);
          resolve(`FROM promise ${arg} timeout - ${timeout}`);
        }, timeout);
      }));
};

const observ = new Observable(subscriber => {
    console.log('0');
    setTimeout(() => {
      console.log(`in Observable 1`);
      subscriber.next('1'); // happens asynchronously
    }, 1000);
    setTimeout(() => {
        console.log(`in Observable 2`);
        subscriber.next('2'); // happens asynchronously
    }, 2000);
    setTimeout(() => {
        console.log(`in Observable 3`);
        subscriber.next('3'); // happens asynchronously
    }, 3000);
});

function testFunc() {
    observ.pipe(
        map(num => {
            console.log(`in MAP ${num}`);
            return foo1(num);
        }),
        mergeAll(),
     ).subscribe(res => {
         console.log(`last station: ${res}`);
     });
}
