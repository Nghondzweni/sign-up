import { ReactComponent as Mars } from "assets/images/mars-symbol.svg";
import { ReactComponent as Venus } from "assets/images/venus-symbol.svg";
import {ReactComponent as Card} from "assets/images/card.svg"

const IconObj = {
  male: <Mars />,
  female: <Venus />,
  card:<Card/>
};

const Icon = ({ name }) => {
  return <> {IconObj[name]}</>;
};

export default Icon;
