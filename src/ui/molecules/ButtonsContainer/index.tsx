import Button from "../../atoms/Button"
import Container from "../../atoms/Container"
import { withMediaQueries } from "../../hoc/withMediaQueries"

export type ButtonsContainerProps = {
    handleStep?: any
    setSelectedStep?: any
    selectedStep?: any
    step?: any
    mediaIsPhone?: boolean
    mediaIsTablet?: boolean
    mediaIsDesktop?: boolean
}

const goBack = "Go back"
const nextStep = "NextStep"

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
    handleStep,
    mediaIsPhone,
    setSelectedStep,
    selectedStep,
    step
}) => {

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
            margin={mediaIsPhone ? "20px" : "0"}
            width="100%"
        >
            {id !== 0 ? (
                <Button
                    marginLeft={mediaIsPhone ? "20px" : 0}
                    onClick={() => handlePreviousStep(selectedStep)}
                    variant="transparency"
                >
                    {goBack}
                </Button>
            ) : null}
            {id !== 3 ? (
                <Button
                    marginRight={mediaIsPhone ? "20px" : 0}
                    onClick={() => handleNextStep(selectedStep)}
                    variant="accent"
                >
                    {nextStep}
                </Button>
            ) : (
                <Button
                    marginRight={mediaIsPhone ? "20px" : 0}
                    onClick={() => handleNextStep(selectedStep)}
                    variant="confirm"
                >
                    Confirm
                </Button>
            )}
        </Container>
    )
}

export default withMediaQueries(ButtonsContainer);
