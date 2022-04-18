import { FC } from "react";
import {
  iDBUserData,
  iUser
} from "../../helpers/interfaces/User";
import {
  CircularProgress,
  Divider,
  Container,
  Grid,
  Typography,
  Stack,
  TextField,
  InputAdornment
} from "@mui/material";
import UserCardUI from "./UserCardUI";
import UserInfoDialogUI from "./UserInfoDialogUI";
import FeedbackIcon from '@mui/icons-material/Feedback';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";


interface iProps {
  remoteUserData: iDBUserData;
  localUserData: iUser[];
  dialogIsOpen: boolean;
  selectedUser: iUser;
  searchString: string;
  handlesearchStringChange: (e: any) => void;
  onDialogClose: () => void;
  openInfoModal: (user: iUser) => void;
  onUserDelete: (id: string) => void;
}

const UserContainerUI: FC<iProps> = (props) => {
  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' alignItems='center' marginBottom={2}>
        <Typography>
          Users from database
        </Typography>
        <TextField value={props.searchString} size='small' label="Search" onChange={props.handlesearchStringChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }} />
      </Stack>

      <Divider style={{ marginBottom: '15px' }} />
      {props.remoteUserData.apicallstate === 'pending' && <Box display='flex' justifyContent='center'><CircularProgress /></Box>}
      {props.remoteUserData.apicallstate === 'idle' && <Box display='flex' justifyContent='center'><CircularProgress /></Box>}
      {props.remoteUserData.apicallstate === 'failed' &&
        <Box display='flex' justifyContent='center'>
          <Stack direction='row'>
            <FeedbackIcon color='error' />
            <Typography>Error during fetching data from server</Typography>
          </Stack>
        </Box>}
      {props.remoteUserData.apicallstate === 'fullfilled' && (
        <Grid container spacing={3}>
          {props.remoteUserData.users.filter(x => x.name.includes(props.searchString)).map((user) =>
            <Grid item xs={12} md={6} lg={4} key={user.id}>
              <UserCardUI user={user} openUserInfoDialog={props.openInfoModal} />
            </Grid>)}
        </Grid>
      )}
      {props.localUserData.length > 0 &&
        <>
          <Typography marginTop='15px'>
            Local users
          </Typography>
          <Divider style={{ marginBottom: '15px' }} />
          {(
            <Grid container spacing={3}>
              {props.localUserData.map((user) =>
                <Grid item xs={12} md={6} lg={4} key={user.id}>
                  <UserCardUI
                    user={user}
                    openUserInfoDialog={props.openInfoModal}
                    deletable={true}
                    onDelete={() => props.onUserDelete(user.id! as string)} />
                </Grid>)}
            </Grid>
          )}
        </>}
      <UserInfoDialogUI
        open={props.dialogIsOpen}
        onClose={() => props.onDialogClose()}
        user={props.selectedUser as iUser} />
    </Container>);
}

export default UserContainerUI;
