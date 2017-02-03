import {Injectable, Inject} from '@angular/core';

import {dispatcher} from '../utils/di-tokens';

@Injectable()
export class UiActions {
  constructor(@Inject(dispatcher) private _dispatcher: any) {}

}
