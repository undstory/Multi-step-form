import Button from "../../ui/atoms/Button";
import Container from "../../ui/atoms/Container";
import Text from "../../ui/atoms/Text"
import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import { StepWrapper } from "./style";
import { StepProps } from "./types";

const Step: React.FC<StepProps> = ({ mediaIsPhone, step }) => {

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
                    size="22px"
                    weight="bold"
                    color="marineBlue"
                    marginbottom="10px"
                >
                    {title}
                </Text>
                <Text
                    size={!mediaIsPhone ? "12px" : "15px"}
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

export default withMediaQueries(Step);
