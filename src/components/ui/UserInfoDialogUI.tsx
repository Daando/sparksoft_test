import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Stack,
    Typography,
    Tooltip
} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { iUser } from "../../helpers/interfaces/User";
import { FC } from "react";
import { PersonOutlined } from "@mui/icons-material";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SignpostIcon from '@mui/icons-material/Signpost';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CodeIcon from '@mui/icons-material/Code';
import ExpandIcon from '@mui/icons-material/Expand';

interface iProp {
    user?: iUser;
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
            <DialogTitle >
                Contact information
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Typography marginBottom={2} marginTop={2}>Person information</Typography>
                <Stack direction='column' spacing={1}>
                    <Stack direction='row' justifyContent='space-between'>
                        <Chip label='Full name' />
                        <Chip icon={<PersonOutlined />} label={props.user?.name} />
                    </Stack>
                    <Divider />
                    <Stack direction='row' justifyContent='space-between'>
                        <Chip label='User name' />
                        <Chip icon={<AccountBoxIcon />} label={props.user?.username} />
                    </Stack>
                    <Divider />
                    <Stack direction='row' justifyContent='space-between'>
                        <Chip label='Email' />
                        <Chip icon={<EmailIcon />} label={props.user?.email} />
                    </Stack>
                    <Divider />
                    <Stack direction='row' justifyContent='space-between'>
                        <Chip label='Phone number' />
                        <Chip icon={<LocalPhoneIcon />} label={props.user?.phone} />
                    </Stack>
                    <Divider />
                </Stack>
                <Typography marginBottom={2} marginTop={2}>Address information</Typography>
                {
                    props.user?.address && (<Stack direction='column' spacing={1}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Chip label='City' />
                            <Chip icon={<LocationCityIcon />} label={props.user?.address.city} />
                        </Stack>
                        <Divider />
                        <Stack direction='row' justifyContent='space-between'>
                            <Chip label='Street' />
                            <Chip icon={<SignpostIcon />} label={props.user?.address.street} />
                        </Stack>
                        <Divider />
                        <Stack direction='row' justifyContent='space-between'>
                            <Chip label='Suite' />
                            <Chip icon={<ApartmentIcon />} label={props.user?.address.suite} />
                        </Stack>
                        <Divider />
                        <Stack direction='row' justifyContent='space-between'>
                            <Chip label='ZIP code' />
                            <Chip icon={<CropFreeIcon />} label={props.user?.address.zipcode} />
                        </Stack>
                        <Divider />
                        <Stack direction='row' justifyContent='space-between'>
                            <Chip label='Geolocation' />
                            <Stack direction='row'>
                                <Tooltip title='Latitude'>
                                    <Chip icon={<CodeIcon />} label={props.user?.address.geo.lat} />
                                </Tooltip>
                                <Tooltip title='Longitude'>
                                    <Chip icon={<ExpandIcon />} label={props.user?.address.geo.lng} />
                                </Tooltip>
                            </Stack>
                        </Stack>
                        <Divider />
                    </Stack>)
                }
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button
                    variant='contained'
                    color='success'
                    onClick={() => props.onClose()} >
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UserInfoDialogUI;