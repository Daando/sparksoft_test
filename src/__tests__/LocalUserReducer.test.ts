import { iUser } from "../helpers/interfaces/User";
import { addUser, deleteUser } from "../redux/actions/LocalUserActions";
import localUserReducer from "../redux/reducers/LocalUserReducer"

const initialState: iUser[] = [];

test('should return the init state - empty user array', () => {
    expect(localUserReducer.getInitialState()).toEqual([]);
})

const testUser: iUser = {
    id: "sdfijsdfrrvef",
    name: "Test User",
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

test('check if user add action is working', () => {
    const actionCall = (localUserReducer(initialState, addUser(testUser)));
    expect(actionCall[0].name).toBe('Test User');
})

test('check if user delete action is working', () => {
    const initialState: iUser[] = [
        {
            id: "sdfijsdfrrvef",
            name: "Test User",
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
    ];
    expect(localUserReducer(initialState, deleteUser("sdfijsdfrrvef"))).toEqual([]);
})