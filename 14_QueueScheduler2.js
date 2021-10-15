const { queueScheduler } = require('rxjs');

console.log('begining');
queueScheduler.schedule(function(state) {
  if (state !== 0) {
    console.log('before', state);
    this.schedule(state - 1); // `this` references currently executing Action (QueueAction),
                              // which we reschedule with new state
    console.log('after', state);
  }
}, 0, 3);
console.log('ending');

// In scheduler that runs recursively, you would expect:
// "before", 3
// "before", 2
// "before", 1
// "after", 1
// "after", 2
// "after", 3

// But with queue it logs:
// "before", 3
// "after", 3
// "before", 2
// "after", 2
// "before", 1
// "after", 1