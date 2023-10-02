import Button from "../../ui/atoms/Button";
import Container from "../../ui/atoms/Container";
import Text from "../../ui/atoms/Text"
import { StepWrapper } from "./style";
import { StepProps } from "./types";


const goBack = "Go back"
const nextStep = "NextStep"

const Step: React.FC<StepProps> = ({ step, handleStep, setSelectedStep, selectedStep }) => {

    const { id, title, subtitle } = step;

    const handlePreviousStep = (selStep: number) => {
        setSelectedStep(selStep - 1)
        handleStep(selStep - 1)
    }

    const handleNextStep = (selStep: number) => {
        setSelectedStep(selStep + 1)
        handleStep(selStep + 1)
    }

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
            <Container
                alignitems="flex-end"
                justifycontent="space-between"
                width="100%"
            >
                {id !== 0 ? (
                    <Button
                        onClick={() => handlePreviousStep(selectedStep)}
                    >
                        {goBack}
                    </Button>
                ) : null}
                {id !== 3 ? (
                    <Button
                        onClick={() => handleNextStep(selectedStep)}
                    >
                        {nextStep}
                    </Button>
                ) : (
                    <Button onClick={() => handleNextStep(selectedStep)}>
                        Confirm
                    </Button>
                )}
            </Container>
        </StepWrapper>
    )
}

export default Step;
