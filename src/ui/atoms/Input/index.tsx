import Text from "../Text";
import { ActiveField, ErrorField, InactiveField, InputField, LabelContainer, SuccessField } from "./style";
import { InputProps, InputState } from "./types";

const getInputVariant = (
    inputStates: InputState
) =>
({
    active: ActiveField,
    error: ErrorField,
    inactive: InactiveField,
    success: SuccessField
}[inputStates]);

const Input: React.FC<InputProps> = ({
    helpText,
    id,
    isValid,
    label,
    name,
    onChange,
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
                htmlFor={name}
            >
                <LabelContainer>
                    <Text
                        color="marineBlue"
                        size="11px"
                        weight="medium"
                    >
                        {label}
                    </Text>
                    {helpText && (
                        <Text
                            color="strawberryRed"
                            size="11px"
                            weight="medium"
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
                    onChange={onChange}
                    state={state}
                    type={type}
                    {...otherProps}
                />
            </label>
        </CustomInputContainer>
    )
}

export default Input;
