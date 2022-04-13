import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CreateUserForm from "../components/CreateUserForm";


export const UserPage = () => {
    const [currentTab, setCurrentTab] = useState("add_contact");

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <Box flexDirection="row">
            <TabContext value={currentTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} centered>
                        <Tab label="Add Contact" value="add_contact" />
                        <Tab label="View Contact" value="view_contact" />
                    </TabList>
                </Box>
                <TabPanel value="add_contact">
                    <Container maxWidth="md" >
                        <CreateUserForm />
                    </Container>
                </TabPanel>
                <TabPanel value="view_contact">Item Two</TabPanel>
            </TabContext>
        </Box>
    );
};

