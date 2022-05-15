import { ReactComponent as Mars } from "assets/images/mars-symbol.svg";
import { ReactComponent as Venus } from "assets/images/venus-symbol.svg";

const IconObj = {
  male: <Mars />,
  female: <Venus />,
};

const Icon = ({ name }) => {
  return <> {IconObj[name]}</>;
};

export default Icon;
