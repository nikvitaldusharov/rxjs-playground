const chalk = require('chalk');
const { of, merge, interval, asyncScheduler, asapScheduler, queueScheduler, Observable, onErrorResumeNext, throwError} = require('rxjs');
const { subscribeOn, observeOn, tap, take, count, map, switchMap, finalize, share } = require('rxjs/operators');

var obs = interval(500).pipe( take(5),
    tap(i => console.log("obs value "+ i)),
    share() );

obs.subscribe(value => console.log(
	"observer 1 received " + value));

obs.subscribe(value => console.log(
	"observer 2 received " + value));