import Identyficator from "../../ui/molecules/Identificator";
import { SidebarWrapper } from "./style";

type SidebarProps = {
    activeStep?: number | any;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeStep
}) => (
    <SidebarWrapper
        height="100%"
        width="100%"
        borderradius="7px"
    >
        <Identyficator
            activeStep={activeStep}
        />
    </SidebarWrapper>
)

export default Sidebar;
