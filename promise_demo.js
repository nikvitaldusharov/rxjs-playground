console.log("begin");
const prom = new Promise((resolve, reject) => {
    resolve('good');
});
prom.then(x => console.log(x));
console.log("end");