import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IFormsState } from '../state/forms.state';

const selectForms = (state: IAppState) => state.forms;

export const selectFormsList = createSelector(
  selectForms,
  (state: IFormsState) => state.toppings
);

export const selectFormSteps = createSelector(
  selectForms,
  (state: IFormsState) => state.steps
);

export const selectFormSummary = createSelector(
  selectForms,
  (state: IFormsState) => state.summary
);
