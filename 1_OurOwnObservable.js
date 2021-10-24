
class Observable {
    constructor(func) {
        this.mainFunc = func;
    }
    subscribe = (subsciber) => {
        this.mainFunc(subsciber); 
    }
}

//fields x y z 
//create method to calculate sum of these fields
//create a method in the class to output in console x y and z
//constructor should have 3 args for x y and z for init of the fields
//create a method which will tell the biggest number from x y and z // compare it with > < use if else
//construct an object from the class and call all methods


//create Observable 
//send 3 next notifications that should contain arrays with objects {x: y: }
//first in one second
//second in 5 second
//third in 7 second
//make a pipe and make mapping to x values using map operator 
//console it with red colors



function dd() {
    console.log("START");

    const func = subscriber => {
        const number = Math.floor(Math.random() * 100);
        subscriber.next(number + 1);
        subscriber.next(number + 2);
        subscriber.next(number + 3);
        subscriber.complete();
    };
    
    const observable = new Observable(func);
    
    
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
}

setTimeout(() => dd(), 2000);
