const chalk = require('chalk');
const { of, merge, interval, range, asyncScheduler, asapScheduler, queueScheduler, Observable, onErrorResumeNext, throwError} = require('rxjs');
const { subscribeOn, observeOn, mergeMap, tap, take, count, map, switchMap, finalize, share } = require('rxjs/operators');

var source = range(1, 2).pipe(
    mergeMap((x) => {
        console.log("IN MERGE MAP " + x)
        return range(x, 2);
    }));

var subscription = source.subscribe(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });