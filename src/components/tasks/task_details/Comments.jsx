import { useEffect, useState } from "react";
import Report from "../../../assets/logo/report.svg";
import Upload from "../../../assets/logo/upload.svg";
import User from "../../../assets/logo/user.svg";
import { taskData } from "@/helpers/tasks_data/TaskData";
// import { taskData } from "../GlobalComponents/TaskData";
// import Map from "../Map";

const Comments = ({ taskDetails }) => {
  const position = [51.505, -0.09];
  const { offers, _id } = taskDetails;

  // get hours
  const timeCalculation = (time) => {
    const today = new Date();
    const createdDate = new Date(time);
    const todayTime = today - createdDate;
    const newData = new Date(todayTime);
    const getHour = newData.getHours();
    return getHour;
  };

  // Comments Reply
  const handleCommentReply = (id) => {
    // console.log("id -> ", id);
    // your function
  };

  //
  const [comment, setComment] = useState("");

  const replySubmitHere = (id) => {
    // console.log("id -> ", id);
    // your function
    setComment("");
  };

  // upload files
  const handleUpload = (id) => {
    // console.log("id -> ", id);
    // your function
  };

  return (
    <div>
      {/* <Map
        className="mapfortaskdetails"
        width="800"
        height="400"
        center={position}
        zoom={12}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map> */}
      {console.log(offers)}

      <div className="flex flex-col  items-start gap-4 relative mt-10">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-gray-900 text-xl tracking-normal leading-normal">
            Offers
          </div>
          <div className="inline-flex items-start gap-[10px] px-[13px] py-py-1.5 bg-[#94b6ef] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
              {offers?.length} OFFERS
            </div>
          </div>
        </div>
        {offers?.map((data, i) => (
          <div
            key={i}
            className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                <img
                  width={100}
                  height={100}
                  className="relative w-[43.27px] h-[44px] object-cover"
                  alt="Ellipse"
                  src={User}
                />
                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-gray-900 text-xl tracking-normal leading-normal">
                    {data?.userId?.first_name}
                    {""} {data?.userId?.last_name}
                  </div>
                  {/* <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-1 bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-normal leading-normal">
                      {data?.title}
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 text-right tracking-normal leading-[34px] whitespace-nowrap">
                {timeCalculation(data?.offer_createdat)} hours ago
              </div>
            </div>
            <div className="flex flex-col items-start gap-[14px]  w-full relative flex-[0_0_auto]">
              <p className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-gray-900 text-4 tracking-normal leading-normal">
                {data?.body}
              </p>
              {/* <button
                className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondary rounded-[50px] relative flex-[0_0_auto]"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                  Reply
                </div>
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-3 relative mt-5">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-gray-900 text-xl tracking-normal leading-normal">
            Questions
          </div>
          {/* <div className="inline-flex items-start gap-[10px] px-[13px] py-1.5 bg-[#e78c3b] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] text-white text-4 font-normal tracking-normal leading-normal">
              {questions?.length} QUESTIONS
            </div>
          </div> */}
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start gap-4 w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-4 relative [] flex-[0_0_auto]">
              <img
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
            </div>
            <div className="flex flex-col items-start gap-[14px] p-4 relative flex-1 grow bg-white rounded-2xl overflow-hidden w-full">
              <textarea
                style={{
                  resize: "none",
                }}
                className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-gray-900 text-4 tracking-normal leading-normal w-full outline-none bg-transparent"
                placeholder="If you....."
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <div className="flex flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row justify-between items-start w-full gap-2">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <img
                    onClick={() => handleUpload(_id)}
                    width={100}
                    height={100}
                    className="relative flex-[0_0_auto] w-[35px] h-[35px]"
                    alt="Frame"
                    src={Upload}
                  />
                  <div
                    onClick={() => replySubmitHere(_id)}
                    className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondary rounded-[50px] relative flex-[0_0_auto] cursor-pointer"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                      Reply
                    </div>
                  </div>
                </div>
                <div className="min-w-min opacity-50 [font-family:'DM_Sans-Regular',Helvetica] text-gray-900 text-3 font-normal tracking-normal leading-normal">
                  1500 max
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start justify-between  w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <img
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-gray-900 text-xl tracking-normal leading-normal">
                  {postedUser?.name}
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-1 bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-normal leading-normal">
                    {postedUser?.label}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 text-right tracking-normal leading-[34px] whitespace-nowrap">
              {timeCalculation(postedUser?.created_at)} hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px]  w-full relative flex-[0_0_auto]">
            <p className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-gray-900 text-4 tracking-normal leading-normal">
              {postedUser?.text}
            </p>
            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <img
                width={100}
                height={100}
                className="relative flex-[0_0_auto] w-5 h-5"
                alt="Frame"
                src={Report}
              />
              <div className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondary rounded-[50px] relative flex-[0_0_auto]">
                <button
                  onClick={() => replySubmitHere(_id)}
                  className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Comments;
