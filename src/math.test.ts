import { add,multiply } from './math';


test('add', () => expect(add(2,3)).toBe(5));
test('multiply throws on undefined input', () => {
  expect(() => multiply(0, undefined as any)).toThrow();
});
