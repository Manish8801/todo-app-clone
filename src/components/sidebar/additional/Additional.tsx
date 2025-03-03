import { FiUsers } from "react-icons/fi";

const Additional = () => {
  return (
    <div className="show-and-hide-on-hover flex-center-center py-6">
      <div className="bg-light-black rounded-full ">
        <div className="rounded-full duration-100 hover:bg-[rgba(255,255,255,.2)] py-1.5 px-2 flex-center-center gap-2 ">
          <div className=" rounded-full bg-blue flex items-center justify-center h-10 w-10 font-semibold">
            +
            <FiUsers className="text-lg" />
          </div>
          <div className="text-blue text-sm font-semibold">
            Add shared space
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
