const { queueScheduler } = require('rxjs');

console.log("begining of code");
queueScheduler.schedule(() => {
  queueScheduler.schedule(() => {
      queueScheduler.schedule(() => {
        console.log('third');
      });
      console.log('second');
  });
  console.log('first');
});
queueScheduler.schedule(() => {
    queueScheduler.schedule(() => console.log('fifth'));
    console.log('forth')
}); 
console.log("end of code");
