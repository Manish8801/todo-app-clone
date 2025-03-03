import { LuCrown } from "react-icons/lu";
import ProfileSettings from "./ProfileSettings";
import JamSidebarButton from "../../JamSidebarButton";

const Profile = () => {
  return (
    <div>
      <div className="p-[22px] pr-1.5 ">
        <ProfileSettings />

        <div className="show-and-hide-on-hover pl-14">
          <div className="text-white font-[700] flex-start-start text-[15px] tracking-wide">
            Manish
            <JamSidebarButton />
          </div>
          <div className="text-grey text-[15px] leading-1 font-[600]">
            Free Plan
          </div>
        </div>
      </div>
      <div className="show-and-hide-on-hover sidebar-button flex-center-start gap-3 sidebar-button w-full pl-6 py-2.5 text-grey">
        <div className="icon text-xl">
          <LuCrown />
        </div>
        <div className="text-[15px] text-nowrap font-semibold">Go Premium</div>
        <div className="text-nowrap rounded-full text-[10px] font-bold border-[1px] border-blue text-blue px-2 py-1">
          Try It Free
        </div>
      </div>
    </div>
  );
};

export default Profile;
