import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../ui/atoms/Input";
import { SAVE_EMAIL, SAVE_NAME, SAVE_PHONE } from "../../../utils/redux/slices/userData";
import { ErrorsTypes, validate } from "../../../utils/validate/validateRules";
import { CustomForm } from "./style";


const StepOne: React.FC = () => {

    const dispatch = useDispatch();

    type FormValuesType = {
        userName: string,
        email: string,
        phone: string
    }

    const initialValues: FormValuesType = {
        userName: "",
        email: "",
        phone: ""
    }

    const [formValues, setFormValues] = useState<FormValuesType>(initialValues)
    const [formErrors, setFormErrors] = useState<ErrorsTypes>({
        userName: null,
        email: null,
        phone: null
    })
    const [isValid, setIsValid] = useState<boolean>(false)

    const { userName, email, phone } = formValues;

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setFormErrors(validate(formValues));
        if (formValues.userName !== "" && formValues.email !== "" && formValues.phone !== "" && (Object.keys(formErrors).length === 0)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [formValues])

    useEffect(() => {
        if (isValid) {
            dispatch(SAVE_NAME(userName));
            dispatch(SAVE_EMAIL(email));
            dispatch(SAVE_PHONE(phone));
        }
    }, [isValid])

    return (
        <CustomForm>
            <Input
                id="userName"
                label="Name"
                name="userName"
                onChange={handleChange}
                placeholder="e.g. Stephen King"
                state="inactive"
                type="text"
                value={userName}
                helpText={formErrors.userName}
            />
            <Input
                id="email"
                label="Email address"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                state="inactive"
                onChange={handleChange}
                type="text"
                value={email}
                helpText={formErrors.email}
            />
            <Input
                id="phone"
                label="Phone number"
                name="phone"
                placeholder="+1 234 567 890"
                onChange={handleChange}
                state="inactive"
                type="text"
                value={phone}
                helpText={formErrors.phone}
            />

        </CustomForm>
    )
}

export default StepOne;
