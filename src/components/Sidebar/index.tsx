import { withMediaQueries } from "../../ui/hoc/withMediaQueries";
import Identyficator from "../../ui/molecules/Identificator";
import { SidebarWrapper } from "./style";

type SidebarProps = {
    activeStep?: number | any;
    mediaIsPhone?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeStep,
    mediaIsPhone
}) => (
    <SidebarWrapper
        height="100%"
        width="100%"
        borderradius={!mediaIsPhone ? "7px" : "0"}
    >
        <Identyficator
            mediaIsPhone={mediaIsPhone}
            activeStep={activeStep}
        />
    </SidebarWrapper>
)

export default withMediaQueries(Sidebar);
