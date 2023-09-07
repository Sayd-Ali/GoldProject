import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass overprice';
        expect(classNames('someClass', {}, ['overprice'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass overprice hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['overprice']))
            .toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass overprice hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['overprice']))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass overprice hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['overprice']))
            .toBe(expected);
    });
});