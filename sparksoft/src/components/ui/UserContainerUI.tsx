import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/UserActions";
import { iDBUserData } from "../../helpers/interfaces/User";

export const UserContainer = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: iDBUserData) => state.loading);
    const users = useSelector((state: iDBUserData) => state.users);

    useEffect(() => {
      dispatch(fetchUsers())
    }, []);

    return (
      <></>
    );
};

