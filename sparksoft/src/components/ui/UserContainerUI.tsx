import { FC, useState } from "react";
import { iDBUserData, iUser } from "../../helpers/interfaces/User";
import { CircularProgress, Divider, Box, Container, Grid } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UserCardUI from "./UserCardUI";
import UserInfoDialogUI from "./UserInfoDialogUI";

interface iProps {
  remoteUserData: iDBUserData;
  dialogIsOpen: boolean;
  selectedUser: iUser;
  onDialogClose: () => void;
  openInfoModal: (user: iUser) => void;
}
const UserContainerUI: FC<iProps> = (props) => {
  return (
    <Container>
      {props.remoteUserData.loading === 'pending' && <CircularProgress />}
      {props.remoteUserData.loading === 'idle' && <><h1>Várakozás adatok betöltésére..</h1></>}
      {props.remoteUserData.loading === 'failed' && <><h1>Hiba történt az adatok betöltése közben!</h1></>}
      {props.remoteUserData.loading === 'fullfilled' && (
        <Grid container spacing={3}>
          {props.remoteUserData.users.map((user) =>
            <Grid item xs={12} md={6} lg={4} key={user.id}>
              <UserCardUI user={user} openUserInfoDialog={props.openInfoModal} />
            </Grid>)}
        </Grid>
      )}
      <UserInfoDialogUI
        open={props.dialogIsOpen}
        onClose={() => props.onDialogClose()}
        user={props.selectedUser as iUser} />
    </Container>);
}

export default UserContainerUI;
