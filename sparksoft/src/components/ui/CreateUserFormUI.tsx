import {
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    TextField
} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { FC } from "react";
import LanguageIcon from '@mui/icons-material/Language';

interface iProps {
    name: string;
    nameError: boolean;
    handleNameChange: (e: any) => void;
    phone: string;
    phoneError: boolean;
    handlePhoneChange: (e: any) => void;
    email: string;
    emailError: boolean;
    handleEmailChange: (e: any) => void;
    userName: string;
    userNameError: boolean;
    handleUserNameChange: (e: any) => void;
    website: string;
    websiteError: boolean;
    handleWebsiteChange: (e: any) => void;
    city: string;
    handleCityChange: (e: any) => void;
    street: string;
    handleStreetChange: (e: any) => void;
    zipCode: string;
    handleZipCodeChange: (e: any) => void;
    suite: string;
    handleSuiteChange: (e: any) => void;
    longitude: string;
    handlelongitudeChange: (e: any) => void;
    latitude: string;
    handlelatitudeChange: (e: any) => void;
    companyName: string;
    handlecompanyNameChange: (e: any) => void;
    companyBs: string;
    handlecompanyBsChange: (e: any) => void;
    companyCatchPhrase: string;
    handlecompanyCatchPhraseChange: (e: any) => void;
    addUser: () => void;
}


const CreateUserFormUI: FC<iProps> = (props) => {
    return (
        <Box maxWidth={800}>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.name} label="Name" error={props.nameError} onChange={props.handleNameChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.userName} label="Username" error={props.userNameError} onChange={props.handleUserNameChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBoxIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.email} label="Email" error={props.emailError} onChange={props.handleEmailChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.phone} label="Phone" error={props.phoneError} onChange={props.handlePhoneChange}
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
                    <TextField fullWidth value={props.website} label="Website" error={props.websiteError} onChange={props.handleWebsiteChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LanguageIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.city} label="City" onChange={props.handleCityChange} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.street} label="Street" onChange={props.handleStreetChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.suite} label="Suite" onChange={props.handleSuiteChange} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.zipCode} label="Zip code" onChange={props.handleZipCodeChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.longitude} label="GEO Longitude" onChange={props.handlelongitudeChange} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.latitude} label="GEO Latitude" onChange={props.handlelatitudeChange} />
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.companyName} label="Company name" onChange={props.handlecompanyNameChange} />
                </Grid>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.companyCatchPhrase} label="Company catchphrase" onChange={props.handlecompanyCatchPhraseChange} />
                </Grid>
            </Grid>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} sm={6} padding={1}>
                    <TextField fullWidth value={props.companyBs} label="Company BS" onChange={props.handlecompanyBsChange} />
                </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Button onClick={() => props.addUser()} variant='contained' color='success'>
                    Add new user
                </Button>
            </Grid>
        </Box>
    );
}


export default CreateUserFormUI;