import { isEmptyOrSpaces, isUser, isUserArray } from "../helpers/utils/Utils";

describe('Check isEmptyOrSpaces Util', () => {
    test.each([
        ['', true],
        [' ', true],
        ['asd', false]
    ])('value %s be %d', (input, expected) => {
        expect(isEmptyOrSpaces(input)).toBe(expected);
    });
});


const objectOk = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

const objectNok = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
}

describe('Check isUserUtil', () => {
    test.each([
        [objectOk, true],
        [[], false],
        [{}, false],
        [objectNok, false],
    ])('value %s be %d', (input, expected) => {
        expect(isUser(input)).toBe(expected);
    });
});


describe('Check isUserArrayUtil', () => {
    test.each([
        [[objectOk], true],
        [[], true],
        [{}, false],
        [[objectNok], false],
    ])('value %s be %d', (input, expected) => {
        expect(isUserArray(input)).toBe(expected);
    });
});