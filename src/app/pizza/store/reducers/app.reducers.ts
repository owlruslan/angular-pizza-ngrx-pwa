import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { formsReducers } from './forms.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  forms: formsReducers
};
