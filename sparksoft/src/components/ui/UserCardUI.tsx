import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
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

interface iProps {
    user: iUser;
    openUserInfoDialog: (user: iUser) => void;
}

const UserCardUI: FC<iProps> = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography marginBottom={1}>
                    {props.user.name}
                </Typography>
                <CardMedia
                    component="img"
                    image="/static/img/raccoon.png"
                    alt="Everybody loves raccoons"
                />
                <Stack direction='row' spacing={3} marginTop={3}>
                    <LocalPhoneIcon />
                    <Tooltip title={props.user.phone} >
                        <Typography>
                            {props.user.phone}
                        </Typography>
                    </Tooltip>
                </Stack>
                <Stack direction='row' spacing={3} >
                    <EmailIcon />
                    <Tooltip title={props.user.email} >
                        <Typography>
                            {props.user.email}
                        </Typography>
                    </Tooltip>
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="More information">
                    <IconButton onClick={() => props.openUserInfoDialog(props.user)}>
                        <InfoIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card >
    );
}

export default UserCardUI;