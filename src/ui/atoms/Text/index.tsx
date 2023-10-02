import { ColorTypes } from "../../../utils/models/colors";
import { TextWrapper } from "./style";
import { TextProps } from "./types";


const Text: React.FC<TextProps> = ({children, ...rest }) => (
    <TextWrapper {...rest}>
        {children}
    </TextWrapper>
)

export default Text;
