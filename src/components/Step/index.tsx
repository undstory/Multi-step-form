import Button from "../../ui/atoms/Button";
import Container from "../../ui/atoms/Container";
import Text from "../../ui/atoms/Text"
import { StepWrapper } from "./style";
import { StepProps } from "./types";

const Step: React.FC<StepProps> = ({ step }) => {

    const { title, subtitle } = step;

    return (
        <StepWrapper
            flexdirection="column"
            alignitems="flex-start"
            justifycontent="space-between"
        >
            <Container
                flexdirection="column"
                alignitems="flex-start"
            >
                <Text
                    size="20px"
                >
                    {title}
                </Text>
                <Text
                    size="12px"
                >
                    {subtitle}
                </Text>
                <Container>
                    Form
                </Container>
            </Container>
        </StepWrapper>
    )
}

export default Step;
