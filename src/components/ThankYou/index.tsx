import Container from "../../ui/atoms/Container";
import Text from "../../ui/atoms/Text";
import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import icon from "../../assets/images/icon-thank-you.svg"
import { CustomText } from "./style";

type ThankYouProps = {
    mediaIsPhone?: boolean;
}

const ThankYou: React.FC<ThankYouProps> = ({ mediaIsPhone }) => (
    <Container
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        width="100%"
        padding="30px 0"
    >
        <img src={icon} alt="thank you icon" />
        <Text
            size="22px"
            weight="bold"
            color="marineBlue"
            marginbottom="10px"
        >Thank you!</Text>
        <CustomText
            size={!mediaIsPhone ? "12px" : "15px"}
        >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </CustomText>
    </Container>
)

export default withMediaQueries(ThankYou);
