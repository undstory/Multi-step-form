import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <button type="button" { ...rest }>
        { children }
    </button>
)

export default Button;
