import { useState } from "react";
import validator from "validator";
import CreateUserFormUI from "./ui/CreateUserFormUI";
import { addUser } from "../redux/actions/UserActions";
import { useDispatch } from "react-redux";
import { isEmptyOrSpaces } from "../helpers/utils/Utils";
import { iUser } from "../helpers/interfaces/User";
import { Phone } from "@mui/icons-material";

const CreateUserForm = () => {

    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [userName, setuserName] = useState('');
    const [webSite, setwebSite] = useState('');

    const [companyBs, setcompanyBs] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [companyCatchPhrase, setcompanyCatchPhrase] = useState('');

    const [addressCity, setaddressCity] = useState('');
    const [addressStreet, setaddressStreet] = useState('');
    const [addressSuite, setaddressSuite] = useState('');
    const [addressZipCode, setaddressZipCode] = useState('');

    const [addressLongitude, setaddressLongitude] = useState('');
    const [addressLatitude, setaddressLatitude] = useState('');

    const [nameError, setnameError] = useState(false);
    const [userNameError, setuserNameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [websiteError, setwebsiteError] = useState(false);

    /*
        TODO ! : Refactor input error checks with timeout to run test only, when user stopped typing
    */

    //#region Input field change handlers
    const handleNameChange = (e) => {
        {/* 
            Note! : Regex test for name name changes - not tested for special cases - needs check
        */}
        const nameTester = new RegExp(/^[\p{L} ,.'-]+$/u);
        setname(e.target.value);
        setnameError(!nameTester.test(e.target.value));
    }

    const handlePhoneChange = (e) => {
        setphone(e.target.value);
        setphoneError(!validator.isMobilePhone(e.target.value))
    }

    const handleEmailChange = (e) => {
        setemail(e.target.value);
        setemailError(!validator.isEmail(e.target.value));
    }

    const handleUserNameChange = (e) => {
        setuserName(e.target.value);
        setuserNameError(isEmptyOrSpaces(e.target.value));
    }

    const handleWebsiteChange = (e) => {
        setwebSite(e.target.value);
        setwebsiteError(!validator.isURL(e.target.value));
    }

    //#region Change handlers - address values
    const handleAddressCityChange = (e) => {
        setaddressCity(e.target.value);
    }

    const handleAddressStreetChange = (e) => {
        setaddressStreet(e.target.value);
    }

    const handleAddressSuiteChange = (e) => {
        setaddressSuite(e.target.value);
    }

    const handleAddressZipCodeChange = (e) => {
        setaddressZipCode(e.target.value);
    }

    const handleAddressLatitudeChange = (e) => {
        setaddressLatitude(e.target.value);
    }

    const handleAddressLongitudeChange = (e) => {
        setaddressLongitude(e.target.value);
    }

    //#endregion

    //#region Change handlers - company values
    const handleCompanyBsChange = (e) => {
        setcompanyBs(e.target.value);
    }

    const handleCompanyNameChange = (e) => {
        setcompanyName(e.target.value);
    }

    const handleCompanyCatchPhraseChange = (e) => {
        setcompanyCatchPhrase(e.target.value);
    }

    //#endregion
    //#endregion
    const dispatch = useDispatch();

    const checkRequiredFields = () =>
        !isEmptyOrSpaces(name) &&
        !isEmptyOrSpaces(userName) &&
        !isEmptyOrSpaces(email) &&
        !isEmptyOrSpaces(phone) &&
        !isEmptyOrSpaces(webSite) &&
        !nameError &&
        !userNameError &&
        !emailError &&
        !phoneError &&
        !websiteError;

    const checkAddressIsEmpty = () =>
        isEmptyOrSpaces(addressCity) ||
        isEmptyOrSpaces(addressStreet) ||
        isEmptyOrSpaces(addressSuite) ||
        isEmptyOrSpaces(addressZipCode) ||
        isEmptyOrSpaces(addressLatitude) ||
        isEmptyOrSpaces(addressLongitude);

    /*Needs to be replaced with exact address validator package*/
    const checkAddressIsValid = () =>
        !isEmptyOrSpaces(addressCity) &&
        !isEmptyOrSpaces(addressStreet) &&
        !isEmptyOrSpaces(addressSuite) &&
        !isEmptyOrSpaces(addressZipCode) &&
        !isEmptyOrSpaces(addressLatitude) &&
        !isEmptyOrSpaces(addressLongitude);

    const checkCompanyIsEmpty = () =>
        isEmptyOrSpaces(companyBs) ||
        isEmptyOrSpaces(companyCatchPhrase) ||
        isEmptyOrSpaces(companyName);

    const checkCompanyIsValid = () =>
        !isEmptyOrSpaces(companyBs) &&
        !isEmptyOrSpaces(companyCatchPhrase) &&
        !isEmptyOrSpaces(companyName);

    const clearForm = () => {
        setname('');
        setuserName('');
        setemail('');
        setphone('');
        setwebSite('');

        setaddressCity('');
        setaddressStreet('');
        setaddressSuite('');
        setaddressZipCode('');
        setaddressLatitude('');

        setcompanyBs('');
        setcompanyCatchPhrase('');
        setcompanyName('');
    }

    const addNewUser = () => {
        let user: iUser;
        if (!checkRequiredFields())
            return;

        user = {
            name: name,
            username: userName,
            email: email,
            phone: phone,
            website: webSite,
        }

        if (!checkAddressIsEmpty()) {
            if (checkAddressIsValid())
                return;

            user.address = {
                street: addressStreet,
                suite: addressSuite,
                city: addressCity,
                zipcode: addressZipCode,
                geo: {
                    lat: addressLatitude,
                    lng: addressLongitude
                }
            }
        }

        if (!checkCompanyIsEmpty()) {
            if (!checkCompanyIsValid())
                return;

            user.company = {
                name: companyName,
                catchPhrase: companyCatchPhrase,
                bs: companyBs
            }
        }

        dispatch(addUser(user));

        clearForm();
    }

    return (
        <CreateUserFormUI
            name={name}
            nameError={nameError}
            handleNameChange={handleNameChange}
            phone={phone}
            handlePhoneChange={handlePhoneChange}
            phoneError={phoneError}
            email={email}
            handleEmailChange={handleEmailChange}
            emailError={emailError}
            userName={userName}
            handleUserNameChange={handleUserNameChange}
            userNameError={userNameError}
            website={webSite}
            websiteError={websiteError}
            handleWebsiteChange={handleWebsiteChange}
            addUser={addNewUser}

            city={addressCity}
            handleCityChange={handleAddressCityChange}
            street={addressStreet}
            handleStreetChange={handleAddressStreetChange}
            suite={addressSuite}
            handleSuiteChange={handleAddressSuiteChange}
            zipCode={addressZipCode}
            handleZipCodeChange={handleAddressZipCodeChange}
            latitude={addressLatitude}
            handlelatitudeChange={handleAddressLatitudeChange}
            longitude={addressLongitude}
            handlelongitudeChange={handleAddressLongitudeChange}

            companyName={companyName}
            handlecompanyNameChange={handleCompanyNameChange}
            companyBs={companyBs}
            handlecompanyBsChange={handleCompanyBsChange}
            companyCatchPhrase={companyCatchPhrase}
            handlecompanyCatchPhraseChange={handleCompanyCatchPhraseChange}
        />
    );
}

export default CreateUserForm;