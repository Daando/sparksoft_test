import {
    Box,
    Divider,
    Grid,
    InputAdornment,
    TextField
} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';



const CreateUserFormUI = (props) => {
    const {
        name,
        nameError,
        handleNameChange,
        phone,
        handlePhoneChange,
        phoneError,
        email,
        handleEmailChange,
        emailError
    } = props;

    return (
        <Box maxWidth={800}>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={name} label="Name" error={nameError} onChange={handleNameChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBoxIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={phone} label="Phone" error={phoneError} onChange={handlePhoneChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={email} label="Email" error={emailError} onChange={handleEmailChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>
            <Divider />

        </Box>
    );
}


export default CreateUserFormUI;