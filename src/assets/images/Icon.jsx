import { ReactComponent as Mars } from "assets/images/mars-symbol.svg";
import { ReactComponent as Venus } from "assets/images/venus-symbol.svg";
import { ReactComponent as Card } from "assets/images/card.svg";
import { ReactComponent as WhiteMars } from "assets/images/mars-symbol--white.svg";
import { ReactComponent as WhiteVenus } from "assets/images/venus-symbol--white.svg";
import { ReactComponent as WhiteCard } from "assets/images/card--white.svg";

import styledComponents from "styled-components";

const StyledIcon = styledComponents.div`
svg{
border-radius: 50%;
background-color: ${(props) => (props.active ? "#afbecb" : "#f5f8f9")};
width: 24px;
height: 24px;
padding:8px;
cursor:pointer;
}
`;

const Icon = ({ name, active }) => {
  const IconObj = {
    male: active ? <WhiteMars /> : <Mars />,
    female: active ? <WhiteVenus /> : <Venus />,
    card: active ? <WhiteCard /> : <Card />,
  };
  return <StyledIcon active={active}> {IconObj[name]}</StyledIcon>;
};

export default Icon;
