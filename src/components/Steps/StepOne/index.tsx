import { useEffect, useState } from "react";
import Container from "../../../ui/atoms/Container";
import Input from "../../../ui/atoms/Input";
import Text from "../../../ui/atoms/Text";
import { RegexTypes, validate } from "../../../utils/validate/validateRules";
import { CustomForm } from "./style";


const StepOne: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isNameValid, setIsNameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

    useEffect(() => {
        const isValid = validate(RegexTypes.NAME, name);
        if (isValid) {
            setIsNameValid(true)
        } else {
            setIsNameValid(false)
        }
    }, [name])

    useEffect(() => {
        const isValid = validate(RegexTypes.EMAIL, email);
        if (isValid) {
            setIsEmailValid(true)
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
                helpText={isNameValid ? null : "This is required field"}
            />
            <Input
                id="emailAddress"
                label="Email address"
                name="emailAddress"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. stephenking@lorem.com"
                state="active"
                type="text"
                helpText={isEmailValid ? null : "This is required field"}
            />
            <Input
                id="phoneNumber"
                label="Phone number"
                name="phoneNumber"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 890"
                state="error"
                type="text"
                helpText={isPhoneValid ? null : "This is required field"}
            />

        </CustomForm>
    )
}

export default StepOne;
