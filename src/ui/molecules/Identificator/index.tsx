import Container from "../../atoms/Container";
import { IdentyficatorWrapper } from "./style";
import Text from "../../atoms/Text"
import { IdentyficatorProps } from "./types";

const steps = [
    {
        id: 0,
        number: 1,
        name: "Step 1",
        title: "Your info"
    },
    {
        id: 1,
        number: 2,
        name: "Step 2",
        title: "Select plan"
    },
    {
        id: 2,
        number: 3,
        name: "Step 3",
        title: "Add-ons"
    },
    {
        id: 3,
        number: 4,
        name: "Step 4",
        title: "Summary"
    },
]

const Identyficator: React.FC<IdentyficatorProps> = ({
    activeStep,
    mediaIsPhone
}) => (
    <Container
        flexdirection={!mediaIsPhone ? "column" : "row"}
        gap={!mediaIsPhone ? "25px" : "15px"}
        padding="30px"
    >
        {steps?.map(step => {
            let activeIdentyficator = false
            if (step.id === activeStep) {
                activeIdentyficator = true
            }
            return (
                <Container
                    alignitems="center"
                    gap="10px"
                    key={step.id}
                >
                    <IdentyficatorWrapper
                        active={activeIdentyficator ? "true" : "false"}
                        alignitems="center"
                        borderradius="50%"
                        height={!mediaIsPhone ? "28px" : "35px"}
                        justifycontent="center"
                        width={!mediaIsPhone ? "28px" : "35px"}
                    >
                        <Text
                            color={activeIdentyficator ? "marineBlue" : "alabaster"}
                            size="12px"
                            weight={activeIdentyficator ? "bold" : "regular"}
                        >{step.number}</Text>
                    </IdentyficatorWrapper>
                    {!mediaIsPhone ? (
                        <Container
                            flexdirection="column"
                            gap="3px"
                        >
                            <Text
                                color="alabaster"
                                opacity={0.8}
                                size="10px"
                            >
                                {step.name.toUpperCase()}
                            </Text>
                            <Text
                                color="alabaster"
                                letterSpacing="1px"
                                size="11px"
                                weight="bold"
                            >
                                {step.title.toUpperCase()}
                            </Text>
                        </Container>
                    ) : null}
                </Container>
            )
        }
        )
        }
    </Container>
)

export default Identyficator;
