import {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    iDBUserData,
    iUser
} from "../helpers/interfaces/User";
import UserContainerUI from "./ui/UserContainerUI";
import { RootState } from "../redux/Store";
import { deleteUser } from "../redux/actions/LocalUserActions";
import { fetchUsers } from "../redux/thunks/RemoteUserThunk";

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

    const handleCloseInfoDialog = () => {
        setuserInfoDialogOpen(false)
    }

    const dispatch = useDispatch();

    const deleteItem = (id: string) => {
        dispatch(deleteUser(id));
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (<UserContainerUI
        remoteUserData={remoteUsers}
        localUserData={localUsers}
        selectedUser={selectedUser as iUser}
        dialogIsOpen={userInfoDialogOpen}
        searchString={searchString}
        handlesearchStringChange={handlesearchStringChange}
        onDialogClose={handleCloseInfoDialog}
        openInfoModal={openInfoModal}
        onUserDelete={deleteItem}
    />);
}

export default UserContainer;
