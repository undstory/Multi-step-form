import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setConstantValue } from "typescript";
import Container from "../../../ui/atoms/Container";
import Input from "../../../ui/atoms/Input";
import Text from "../../../ui/atoms/Text";
import { SAVE_EMAIL, SAVE_NAME, SAVE_PHONE } from "../../../utils/redux/slices/userData";
import { RegexTypes, validate } from "../../../utils/validate/validateRules";
import { CustomForm } from "./style";


const StepOne: React.FC = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);

    const [isNameValid, setIsNameValid] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false)

    useEffect(() => {
        if (isNameValid && isEmailValid && isPhoneValid) {
            dispatch(SAVE_NAME)
            dispatch(SAVE_EMAIL);
            dispatch(SAVE_PHONE)
        }
        console.log(name, email, phone, isNameValid, isEmailValid, isPhoneValid)
    }, [name, email, phone])

    useEffect(() => {
        const isValid = validate(RegexTypes.NAME, name);
        if (isValid) {
            setIsNameValid(true);

        } else {
            setIsNameValid(false)
        }
    }, [name])

    useEffect(() => {
        const isValid = validate(RegexTypes.EMAIL, email);
        if (isValid) {
            setIsEmailValid(true);

        } else {
            setIsEmailValid(false)
        }
    }, [email])

    useEffect(() => {
        const isValid = validate(RegexTypes.PHONE, phone);
        if (isValid) {
            setIsPhoneValid(true)

        } else {
            setIsPhoneValid(false)
        }
    }, [phone])

    return (
        <CustomForm>
            <Input
                id="firstName"
                label="Name"
                name="firstName"
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Stephen King"
                state="inactive"
                type="text"
            // helpText={isNameValid ? null : "This is required field"}
            />
            <Input
                id="emailAddress"
                label="Email address"
                name="emailAddress"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. stephenking@lorem.com"
                state="inactive"
                type="text"
            // helpText={setHelpText(email, isEmailValid)}
            />
            <Input
                id="phoneNumber"
                label="Phone number"
                name="phoneNumber"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 890"
                state="inactive"
                type="text"
            // helpText={isPhoneValid ? null : "This is required field"}
            />

        </CustomForm>
    )
}

export default StepOne;
