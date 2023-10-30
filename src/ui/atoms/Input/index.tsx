import Container from "../Container";
import Text from "../Text";
import { ActiveField, ErrorField, InactiveField, InputField, LabelContainer, SuccessField } from "./style";
import { InputProps, InputState } from "./types";

const getInputVariant = (
    inputStates: InputState = 'inactive'
) =>
({
    active: ActiveField,
    error: ErrorField,
    inactive: InactiveField,
    success: SuccessField
}[inputStates]);

const Input: React.FC<InputProps> = ({
    helpText = "This is help text",
    id,
    isValid,
    label,
    name,
    placeholder,
    required,
    state = "inactive",
    type,
    ...otherProps
}) => {
    const CustomInputContainer = getInputVariant(state);
    return (
        <CustomInputContainer>
            <label
                htmlFor="input"
            >
                <LabelContainer>
                    <Text
                        size="11px"
                        weight="medium"
                        color="marineBlue"
                    >
                        {label}
                    </Text>
                    {helpText && (
                        <Text
                            size="11px"
                            weight="medium"
                            color="strawberryRed"
                        >
                            {helpText}
                        </Text>
                    )}
                </LabelContainer>
                <InputField
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    state={state}
                    type={type}
                    {...otherProps}
                />
            </label>
        </CustomInputContainer>
    )
}

export default Input;
