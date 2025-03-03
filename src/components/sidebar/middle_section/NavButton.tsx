import { IconType } from "react-icons";
import Count from "../Count";
type NaveButtonProps = {
  icon: IconType;
  buttonName: string;
  count?: number;
  iconSize: string;
};
const NavButton = ({
  icon: IconComponent,
  iconSize,
  buttonName,
  count,
}: NaveButtonProps) => {
  return (
    <button className="sidebar-button flex-center-start gap-3 w-full py-2.5 font-semibold pl-6 text-grey">
      <div className={iconSize}>{<IconComponent />}</div>
      <div className="text-[15px]">{buttonName}</div>
      {count && <Count/>}
    </button>
  );
};

export default NavButton;
