import { useEffect, useState } from "react";
import BackImage from "../../../assets/logo/back.svg";
import Calender from "../../../assets/logo/calendar.svg";
import Marker from "../../../assets/logo/marker.svg";
import Timer from "../../../assets/logo/time-fast.svg";
import User from "../../../assets/logo/user.svg";
import { useNavigate } from "react-router-dom";
import { taskData } from "@/helpers/tasks_data/TaskData";
import axios from "axios";
import MakeOffer from "../offer_modal/MakeOffer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Details = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {
    _id,
    what,
    when,
    where,
    offers,
    who,
    details,
    budget,
    createdAt,
    task_status,
    questions,
    aiQuestions,
    userId,
  } = props.taskDetails;

  // Make an Offer
  const makeAnOffer = (_id) => {
    // console.log("_id ", _id);
    // your function here
  };

  const timeCalculation = (time) => {
    const today = new Date();
    const createdDate = new Date(time);
    const todayTime = today - createdDate;
    const newData = new Date(todayTime);
    const getHour = newData.getHours();
    return getHour;
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-[44px] p-[30px] relative bg-[#f4f8fd] rounded-3xl overflow-hidden">
        <div className="flex flex-col items-end gap-9 relative w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between pt-0 pb-9 px-0 relative w-full flex-[0_0_auto] border-b">
            <button onClick={() => navigate("..", { relative: "path" })}>
              <img
                width={100}
                height={100}
                className="cursor-pointer relative w-6 h-6"
                alt="Back"
                src={BackImage}
              />
            </button>

            <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 tracking-normal leading-normal">
                {timeCalculation(createdAt)} hours ago
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-10 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex gap-[15px] items-start justify-center pb-6 pt-0 px-0 w-full">
                <p className="relative flex-1 mt-[-1.00px] text-secondary font-bold text-2xl md:text-3xl lg:text-4xl tracking-normal leading-normal">
                  {what}
                </p>
                <div className="relative w-fit mt-[-1.00px] text-secondary font-bold text-3xl md:text-4xl lg:text-5xl tracking-normal leading-normal">
                  ${budget}
                </div>
              </div>
              <div className="relative font-normal text-gray-900 text-5 tracking-normal leading-normal">
                Details:
              </div>
              <p className="relative [font-family:'DM_Sans-Regular',Helvetica] font-normal text-gray-900 text-4 tracking-normal leading-normal">
                {details}
              </p>
              <p className="relative [font-family:'DM_Sans-Regular',Helvetica] font-normal text-gray-900 text-4 tracking-normal leading-normal">
                {details}
              </p>
              {/* {aiQuestions?.length > 0 && (
                <div>
                  {aiQuestions?.map((que, i) => (
                    <div key={i}>
                      <p>
                        <span className="font-bold">Quistion:</span>{" "}
                        {que?.question}
                      </p>
                      <p>
                        {" "}
                        <span className="font-bold"> Answer: </span>
                        {que?.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
            <div className="flex flex-col items-start gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex items-center gap-6 px-0 py-6 w-full flex-[0_0_auto] border-t border-b flex-wrap">
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <img
                    width={100}
                    height={100}
                    className="relativ w-5 h-5"
                    alt="Marker"
                    src={Marker}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 tracking-normal leading-normal">
                    {who}
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <img
                    width={100}
                    height={100}
                    className="relative w-5 h-5"
                    alt="Calendar"
                    src={Calender}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 tracking-normal leading-normal">
                    Before Tomorrow
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <img
                    width={100}
                    height={100}
                    className="relative w-5 h-5"
                    alt="Time fast"
                    src={Timer}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-gray-900 text-4 tracking-normal leading-normal">
                    {when}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] flex-wrap">
                <img
                  width={100}
                  height={100}
                  className="relative w-[32px] h-[32px] object-cover cursor-pointer"
                  alt="Ellipse"
                  src={User}
                  onClick={() => {
                    navigate("/person_details");
                  }}
                />
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-primary rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    {task_status}
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#e78c3b] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    {questions?.length} QUESTIONS
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#94b6ef] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    {offers?.length} OFFERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <button
            onClick={() => {
              setOpen(!open);
              // navigator.clipboard.writeText(payment.id);
            }}
            className="cursor-pointer flex w-[249px] items-center justify-center gap-[10px] px-6 py-[16px] relative bg-secondary rounded-[50px]"
          >
            <div className="relative w-fit mt-[-1.00px] font-normal text-[#ffffff] text-4 tracking-normal leading-normal">
              Make an offer
            </div>
          </button>

          <DialogContent
            className="max-h-[98vh] overflow-y-auto border md:max-w-2xl"
            xtra=" opacity-30"
          >
            <MakeOffer
              open={open}
              setOpen={setOpen}
              taskId={_id}
              posterId={userId?._id}
              fetchSingleData={props.fetchSingleData}
            />
          </DialogContent>
        </Dialog>
        {/* <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <button
            onClick={() => makeAnOffer(_id)}
            className="cursor-pointer flex w-[249px] items-center justify-center gap-[10px] px-6 py-[16px] relative bg-secondary rounded-[50px]"
          >
            <div className="relative w-fit mt-[-1.00px] font-normal text-[#ffffff] text-4 tracking-normal leading-normal">
              Make an offer
            </div>
          </button>
        </div> */}
      </div>
      <p className="mb-4 mt-12 text-2xl font-semibold">FAQ about the task</p>
      {aiQuestions?.length > 0 && (
        <Accordion type="single" collapsible className="w-full ">
          {aiQuestions?.map((que, i) => {
            if (que?.answer !== "") {
              return (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    {que.question}
                  </AccordionTrigger>
                  <AccordionContent>{que.answer}</AccordionContent>
                </AccordionItem>
              );
            }
            return null;
          })}
        </Accordion>
      )}
    </div>
  );
};

export default Details;
