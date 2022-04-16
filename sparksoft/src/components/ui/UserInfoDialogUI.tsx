import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Dialog,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import { iUser } from "../../helpers/interfaces/User";
import { FC } from "react";

interface iProp {
    user: iUser;
    open: boolean;
    onClose: Function;
}

const UserInfoDialogUI: FC<iProp> = (props) => {
    return (
        <Dialog
            open={props.open}
            onClose={() => props.onClose()}
            fullWidth
            maxWidth='md'>
        </Dialog>
    );
}

export default UserInfoDialogUI;