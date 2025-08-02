import { expect, test } from 'vitest';
import { toTitleCase } from './utils';

test('converts string to title case', () => {
	expect(toTitleCase('hello world')).toBe('Hello World');
});
