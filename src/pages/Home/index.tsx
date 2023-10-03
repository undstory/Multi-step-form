import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Step from "../../components/Step";
import ThankYou from "../../components/ThankYou";
import Container from "../../ui/atoms/Container";
import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import { MainContainer } from "../../utils/styles/style";

export type StepType = {
    id: number,
    title: string,
    subtitle: string
}

const steps: StepType[] = [{
    id: 0,
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number."
}, {
    id: 1,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing. "
}, {
    id: 2,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience. "
}, {
    id: 3,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming."
}]

type HomeProps = {
    mediaIsPhone?: boolean
}

const Home: React.FC<HomeProps> = ({ mediaIsPhone }) => {

    const [selectedStep, setSelectedStep] = useState(0);
    const [step, setStep] = useState<StepType>(steps[0])


    const handleStep = (selStep: number) => {
        setStep(steps[selStep])
    }

    return (
        <Container
            background="lightBlue"
            height="100vh"
            width="100%"
            nopadding="true"
            justifycontent='center'
            alignitems='center'
        >
            <MainContainer
                background="alabaster"
                minwidth="700px"
                borderradius='9px'
                height="480px"
                justifycontent='space-between'
            >

                <Sidebar
                    activeStep={selectedStep === 4 ? (setSelectedStep(3)) : selectedStep}
                />
                {selectedStep !== 4 && step !== undefined ? (
                    <Step
                        step={step}
                        handleStep={handleStep}
                        setSelectedStep={setSelectedStep}
                        selectedStep={selectedStep}
                    />
                ) : (
                    <ThankYou />
                )}
            </MainContainer>
        </Container>
    )
}

export default withMediaQueries(Home);