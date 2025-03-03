type CountProps = {
  count?: number;
  isActive?: boolean;
};

const Count = ({ count, isActive }: CountProps) => {
  if (count) {
    return (
      <>
        {count !== 0 && (
          <div
            className={`${
              isActive
                ? "bg-blue hover:text-white"
                : "bg-[rgba(255,255,255,.3)] text-[rgba(0,0,0,0.6)]"
            }  text-[10px] pt-0.5 h-5 w-5 flex-center-center font-extrabold rounded-full`}
          >
            {count}
          </div>
        )}
      </>
    );
  }
};

export default Count;
