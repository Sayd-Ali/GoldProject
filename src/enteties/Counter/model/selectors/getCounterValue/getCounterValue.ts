import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'enteties/Counter/model/selectors/getCounter/getCounter';
import { CounterSchema } from 'enteties/Counter';

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
