const db = require('../db');

//populate db with a test value
beforeEach(() => {
    db.articles['name'] = 'body';
});

describe('getKeys', () => {
    
    test('should return an array of keys', () => {
        expect(db.getKeys()).toEqual(['name']);
    });


    test('should return an empty array when no entries exist', () => {
        delete db.articles['name'];

        expect(db.getKeys()).toEqual([]);
    });
});

describe('getValue', () => {

    test('should return the correct value when a valid key is supplied', () => {
        expect(db.getValue('name')).toBe('body');
    });

    test('should return undefined if an invalid key is supplied', () => {
        expect(db.getValue('invalidName')).toBeUndefined();
    });

    test('should return undefined if given bad data', () => {
        expect(db.getValue(undefined)).toBeUndefined();
    });

});

describe('setValue', () => {
    test ('should return null if fed bad data', () => {
        expect(db.setValue(undefined, undefined)).toBeNull();
    });

    test('should add a new entry when called with good values', () => {
        db.setValue('testTitle', 'testBody');
        expect(db.articles['testTitle']).toBe('testBody');
    });
});