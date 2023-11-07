import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Step from "../../components/Step";
import StepTwo from "../../components/Steps";
import StepOne from "../../components/Steps/StepOne";
import ThankYou from "../../components/ThankYou";
import Container from "../../ui/atoms/Container";
import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import ButtonsContainer from "../../ui/molecules/ButtonsContainer";

import { MainContainer } from "../../utils/styles/style";

export type StepType = {
    id: number,
    subtitle: string,
    title: string,
    component: ReactElement
}

const steps: StepType[] = [{
    id: 0,
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
    component: <StepOne />
}, {
    id: 1,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing. ",
    component: <StepTwo />
}, {
    id: 2,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience. ",
    component: <StepTwo />
}, {
    id: 3,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
    component: <StepTwo />
}]

type HomeProps = {
    mediaIsPhone?: boolean
}

const Home: React.FC<HomeProps> = ({ mediaIsPhone }) => {

    const userData = useSelector((state: any) => state.userData)
    const [selectedStep, setSelectedStep] = useState(0);
    const [step, setStep] = useState<StepType>(steps[0])


    const handleStep = (selStep: number) => {
        setStep(steps[selStep])
    }

    return (
        <Container
            alignitems='center'
            background="lightBlue"
            flexdirection={!mediaIsPhone ? "row" : "column"}
            height="100vh"
            justifycontent={!mediaIsPhone ? 'center' : "space-between"}
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
                        justifycontent="space-between"
                        padding={!mediaIsPhone ? "40px 40px 20px" : 0}
                        width="100%"
                    >
                        <Step
                            step={step}
                        />
                        {!mediaIsPhone ? (
                            <ButtonsContainer
                                handleStep={handleStep}
                                selectedStep={selectedStep}
                                setSelectedStep={setSelectedStep}
                                step={step}
                            />
                        ) : null}
                    </Container>
                ) : (
                    <ThankYou />
                )}

            </MainContainer>
            {selectedStep !== 4 && step !== undefined && mediaIsPhone ? (
                <ButtonsContainer
                    handleStep={handleStep}
                    selectedStep={selectedStep}
                    setSelectedStep={setSelectedStep}
                    step={step}
                />
            ) : null}
        </Container>
    )
}

export default withMediaQueries(Home);
