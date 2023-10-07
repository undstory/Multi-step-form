import Button from "../../atoms/Button"
import Container from "../../atoms/Container"

export type ButtonsContainerProps = {
    handleStep?: any
    setSelectedStep?: any
    selectedStep?: any
    step?: any
}


const goBack = "Go back"
const nextStep = "NextStep"

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({ handleStep, setSelectedStep, selectedStep, step }) => {

    const { id } = step || {};

    const handlePreviousStep = (selStep: number) => {
        setSelectedStep(selStep - 1)
        handleStep(selStep - 1)
    }

    const handleNextStep = (selStep: number) => {
        setSelectedStep(selStep + 1)
        handleStep(selStep + 1)
    }
    return (
        <Container
            justifycontent="space-between"
            width="100%"
        >
            {id !== 0 ? (
                <Button variant="transparency"
                    onClick={() => handlePreviousStep(selectedStep)}
                >
                    {goBack}
                </Button>
            ) : null}
            {id !== 3 ? (
                <Button variant="accent"
                    onClick={() => handleNextStep(selectedStep)}
                >
                    {nextStep}
                </Button>
            ) : (
                <Button variant="confirm" onClick={() => handleNextStep(selectedStep)}>
                    Confirm
                </Button>
            )}
        </Container>
    )
}

export default ButtonsContainer;
