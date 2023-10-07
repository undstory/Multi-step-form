import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Step from "../../components/Step";
import ThankYou from "../../components/ThankYou";
import Container from "../../ui/atoms/Container";
import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import ButtonsContainer from "../../ui/molecules/ButtonsContainer";

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
            alignitems='center'
            background="lightBlue"
            height="100vh"
            flexdirection={!mediaIsPhone ? "row" : "column"}
            justifycontent={!mediaIsPhone ? 'center' : "flex-start"}
            nopadding="true"
            width="100%"
        >
            {mediaIsPhone ? (
                <Sidebar
                    activeStep={selectedStep === 4 ? (setSelectedStep(3)) : selectedStep}
                />
            ) : (
                null
            )}
            <MainContainer
                background="alabaster"
                borderradius='9px'
                height={!mediaIsPhone ? "480px" : "auto"}
                justifycontent='space-between'
                width={!mediaIsPhone ? "700px" : "auto"}
            >
                {!mediaIsPhone ? (
                    <Sidebar
                        activeStep={selectedStep === 4 ? (setSelectedStep(3)) : selectedStep}
                    />
                ) : (
                    null
                )}
                {selectedStep !== 4 && step !== undefined ? (
                    <Container
                        flexdirection="column"
                        width="100%"
                        padding={!mediaIsPhone ? "40px 40px 20px" : 0}
                        justifycontent="space-between"
                    >
                        <Step
                            step={step}
                        />
                        <ButtonsContainer
                            step={step}
                            handleStep={handleStep}
                            selectedStep={selectedStep}
                            setSelectedStep={setSelectedStep}
                        />
                    </Container>
                ) : (
                    <ThankYou />
                )}

            </MainContainer>
        </Container>
    )
}

export default withMediaQueries(Home);
