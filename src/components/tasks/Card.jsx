import Calender from "../../assets/logo/calendar.svg";
import Marker from "../../assets/logo/marker.svg";
import Timer from "../../assets/logo/time-fast.svg";
import User from "../../assets/logo/user.svg";

const Card = ({ item }) => {
  const {
    _id,
    taskTitle,
    amount,
    details,
    taskStatus,
    offered,
    follow,
    carl_category_name,
    workType,
    location,
    mapLocation,
    created_at,
    deadline,
    postedUser,
  } = item;
  return (
    <div className="p-10 border-b-2">
      <div className="w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative">
        <div className="[font-family:'Clash_Display-Medium',Helvetica]  mt-[-1.00px] tracking-normal  text-xl sm:text-2xl md:text-[1.5rem] text-blue font-medium leading-normal relative">
          {/* task title */}
          <h3>{taskTitle}</h3>
        </div>

        {/* Price */}
        <strong className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-normal text-2xl text-secondary font-bold leading-normal relative">
          ${amount}
        </strong>
      </div>
      <div className="mt-5 w-full flex self-stretch flex-col items-start gap-[15px] flex-[0_0_auto] relative">
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <img className="w-5 h-5 relative" alt="Marker" src={Marker} />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-normal text-base text-blue font-medium leading-normal relative">
            {workType}
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <img className="w-5 h-5 relative" alt="Calendar" src={Calender} />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-normal text-base text-blue font-medium leading-normal relative">
            Before Tomorrow
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <img className="w-5 h-5 relative" alt="Time fast" src={Timer} />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-normal text-base text-blue font-medium leading-normal relative">
            Anytime
          </div>
        </div>
      </div>
      <div className="mt-5 inline-flex flex-wrap items-start gap-2 flex-[0_0_auto] relative">
        <img
          className="w-[32px] object-cover h-[32px] relative"
          alt="Ellipse"
          src={User}
        />
        <div
          className={`inline-flex items-start gap-[10px] flex-[0_0_auto] px-[13px] py-[6px] overflow-hidden rounded-[500px] relative bg-secondary`}
        >
          <div className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-normal text-base text-white font-normal leading-normal relative">
            {taskStatus}
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] px-[13px] py-[6px] overflow-hidden rounded-[500px] bg-[#94b6ef] relative">
          <div className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-normal text-base text-white font-normal leading-normal relative">
            {offered?.length} OFFERS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
