import { EMPTY, lastValueFrom } from "rxjs";

EMPTY.toPromise().then(console.log);

lastValueFrom(EMPTY).catch(err => console.log(`Error here - ${err}`));