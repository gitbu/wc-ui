import { ObjectValue } from './object-value';

describe('json-object-value', () => {
  it('builds', () => {
    expect(new ObjectValue()).toBeTruthy();
  });
});
