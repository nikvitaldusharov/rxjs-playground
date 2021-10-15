
class Observable {
    //TODO
}

console.log("START");

const observable = new Observable(subscriber => {
    const number = Math.floor(Math.random() * 100);
    subscriber.next(number + 1);
    subscriber.next(number + 2);
    subscriber.next(number + 3);
    subscriber.complete();
  });


observable.subscribe( {
    next: x => { console.log(`result = ${x}`) },
    error: err => { console.log(err) },
    complete: () => { console.log('COMPLETE')}
});
observable.subscribe({
    next: x => { console.log(`result = ${x}`) },
    error: err => { console.log(err) },
    complete: () => { console.log('COMPLETE')}
});
observable.subscribe({
    next: x => { console.log(`result = ${x}`) },
    error: err => { console.log(err) },
    complete: () => { console.log('COMPLETE')}
});

console.log("END");
