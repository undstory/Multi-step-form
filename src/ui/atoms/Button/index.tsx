import { CustomButton } from "./style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <CustomButton type="button" {...rest}>
        {children}
    </CustomButton>
)

export default Button;
