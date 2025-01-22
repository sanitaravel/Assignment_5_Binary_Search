import { binarySearch } from './binarySearch';
import { describe, it } from 'node:test';
import assert from 'assert';

describe('binarySearch', () => {
    it('should return -1 for an empty array', () => {
        const arr: number[] = [];
        const target: number = 1;
        const result = binarySearch(arr, target);
        assert.strictEqual(result, -1);
    })

    it('should return -1 if the target is not in the array', () => {
        const arr: number[] = [1, 2, 3, 4, 5];
        const target: number = 6;
        const result = binarySearch(arr, target);
        assert.strictEqual(result, -1);
    })

    it('should find the index of the target in an array with multiple elements', () => {
        const arr: number[] = [1, 2, 3, 4, 5];
        const target: number = 3;
        const result = binarySearch(arr, target);
        assert.strictEqual(result, 2);
    })

    it('should return the index of any matching element in an array with duplicate elements', () => {
        const arr: number[] = [1, 2, 3, 3, 4, 5];
        const target: number = 3;
        const result = binarySearch(arr, target);
        assert.ok(result === 2 || result === 3);
    })

    it('should find the index of the target in an array with an odd number of elements', () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
        const target: number = 4;
        const result = binarySearch(arr, target);
        assert.strictEqual(result, 3);
    })

    it('should find the index of the target in an array with an even number of elements', () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        const target: number = 4;
        const result = binarySearch(arr, target);
        assert.strictEqual(result, 3);
    })
})