import test from 'node:test';
import assert from 'node:assert/strict';

import { validateFields } from '../public/core.js';
test('valid fields are trimmed without mutating the input', () => {
  const input = { name: ' Mei ', email: ' mei@example.com ' };
  const result = validateFields(input); assert.equal(result.valid, true);
  assert.deepEqual(result.values, { name: 'Mei', email: 'mei@example.com' }); assert.equal(input.name, ' Mei ');
});
test('whitespace-only name fails while valid email survives', () => {
  const result = validateFields({ name: ' \t ', email: 'a@example.com' });
  assert.deepEqual(Object.keys(result.errors), ['name']); assert.equal(result.values.email, 'a@example.com');
});
test('invalid then corrected email does not retain stale errors', () => {
  assert.equal(validateFields({ name: 'A', email: 'wrong' }).valid, false);
  assert.deepEqual(validateFields({ name: 'A', email: 'a@example.com' }).errors, {});
});
test('multiple at-signs and whitespace are outside the simple format', () => {
  for (const email of ['a@@b.com', 'a b@example.com', 'a@b', '']) assert.equal(validateFields({ name: 'A', email }).valid, false);
});
