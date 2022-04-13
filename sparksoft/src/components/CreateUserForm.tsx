import React from "react";
import { iUser } from '../helpers/interfaces/User';
import validator from 'validator';
import CreateUserFormUI from "./ui/CreateUserFormUI";

interface iCreateUserFormState {
    newUser: iUser;
    nameError: boolean;
    phoneError: boolean;
    emailError: boolean;
}

class CreateUserForm extends React.Component {
    state: iCreateUserFormState = {
        newUser: {
            email: '',
            name: '',
            company: {
                bs: '',
                catchPhrase: '',
                name: ''
            },
            address: {
                city: '',
                geo: {
                    lat: '',
                    lng: ''
                },
                street: '',
                suite: '',
                zipcode: ''
            },
            phone: '',
            username: '',
            website: ''
        },
        emailError: false,
        nameError: false,
        phoneError: false
    }

    /*
        TODO ! : Refactor input error checks with timeout to run test only, when user stopped typing
    */

    handleNameChange = (e) => {
        {/* 
            Note! : Regex test for name name changes - not tested for special cases - needs check
        */}
        const nameTester = new RegExp(/^[\p{L} ,.'-]+$/u);
        this.setState({
            newUser: { ...this.state.newUser, name: e.target.value }, nameError: !nameTester.test(e.target.value)
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            newUser: { ...this.state.newUser, name: e.target.value }
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            newUser: { ...this.state.newUser, email: e.target.value }, nameError: !validator.isEmail(e.target.value)
        });
    }

    render() {
        return (
            <CreateUserFormUI
                name={this.state.newUser.name}
                nameError={this.state.nameError}
                handleNameChange={this.handleNameChange}
                phone={this.state.newUser.phone}
                handlePhoneChange={this.handlePhoneChange}
                phoneError={this.state.phoneError}
                email={this.state.newUser.email}
                handleEmailChange={this.handleEmailChange}
                emailError={this.state.emailError}
            />
        );
    }
}

export default CreateUserForm;