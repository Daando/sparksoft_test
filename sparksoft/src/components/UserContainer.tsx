import {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { fetchUsers } from "../redux/slices/UserSlice";
import {
    iDBUserData,
    iUser
} from "../helpers/interfaces/User";
import UserContainerUI from "./ui/UserContainerUI";
import { RootState } from "../redux/Store";
import { deleteUser } from "../redux/actions/UserActions";

const UserContainer = () => {
    const remoteUsers: iDBUserData = useSelector((state: RootState) => state.remoteUsers);
    const localUsers: iUser[] = useSelector((state: RootState) => state.localUsers);

    const [userInfoDialogOpen, setuserInfoDialogOpen] = useState<boolean>(false);
    const [selectedUser, setselectedUser] = useState<iUser | undefined>(undefined);
    const [searchString, setsearchString] = useState('');

    const openInfoModal = (user: iUser): void => {
        setselectedUser(user);
        setuserInfoDialogOpen(true);
    }

    const handlesearchStringChange = (e) => {
        setsearchString(e.target.value);
    }

    const dispatch = useDispatch();

    const deleteItem = (id: string) => {
        dispatch(deleteUser(id));
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (<UserContainerUI
        remoteUserData={remoteUsers}
        localUserData={localUsers}
        selectedUser={selectedUser as iUser}
        dialogIsOpen={userInfoDialogOpen}
        searchString={searchString}
        handlesearchStringChange={handlesearchStringChange}
        onDialogClose={() => setuserInfoDialogOpen(false)}
        openInfoModal={openInfoModal}
        onUserDelete={deleteItem}
    />);
}

export default UserContainer;
