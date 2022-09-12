import { getRandomSubArray } from './getRandomSubArray';

function checkDuplicates(array) {
    let hasDuplicates = false;
    let obj = {};
    array.forEach((item) => {
        if (!obj[item]) {
            obj[item] = true;
        } else {
            hasDuplicates = true;
        }
    });

    return hasDuplicates;
}

describe('checkDuplicates', () => {
    it('should return true if there is a duplicate', () => {
        const arrayWithDuplicates = ['item1', 'item2', 'item1'];
        expect(checkDuplicates(arrayWithDuplicates)).toEqual(true);
    });

    it('should return false if there is no duplicate', () => {
        const arrayWithNoDuplicates = ['item1', 'item2', 'item3'];
        expect(checkDuplicates(arrayWithNoDuplicates)).toEqual(false);
    });
});

describe('getRandomSubArray', () => {
    let array;

    beforeEach(() => {
        array = new Array(10).fill().map((_, index) => `item${index}`);
    });
    afterEach(() => {
        array = undefined;
    });

    it('should contain 5 items as specified', () => {
        expect(getRandomSubArray(array, 5).length).toEqual(5);
    });

    it('should not contain duplicates', () => {
        const randomSubArray = getRandomSubArray(array, 9);

        expect(checkDuplicates(randomSubArray)).toEqual(false);
    });
});
