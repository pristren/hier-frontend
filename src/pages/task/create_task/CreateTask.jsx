import { useEffect, useState } from "react";
import OpenAI from "openai";
import { DatePicker } from "@/components/ui/calendar_date_picker";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_REACT_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default function CreateTask() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputData, setInputData] = useState({});
  // const [flexible]
  const [aiQuisions, setAiQuistions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [jobType, setJobType] = useState("Basics");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inputData"));
    const qsn = JSON.parse(localStorage.getItem("questions"));
    // console.log(qsn)
    if (data) {
      setInputData(data);
      if (data?.date) {
        setDate(new Date(data?.date));
      }
    }
    if (qsn) {
      setAiQuistions(qsn);
    }
  }, []);
  // console.log(date);

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    localStorage.setItem(
      "inputData",
      JSON.stringify({
        ...inputData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const [dataAdded, setDataAdded] = useState({
    basic: false,
    details: false,
    budget: false,
    summury: false,
  });

  async function askedquistionbyAi() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `one user wants to ${inputData?.what}, in ${inputData?.who} , in ${inputData?.when}, in ${inputData?.where} with the minimal budget. I asked the title , in person or remote, when , where budget and details. Now what could be some other questions that might be important but we did not include .give me the list of question max(6) Just give me question lists`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }

  const handleSubmitData = (event) => {
    console.log(inputData);
    console.log(date);
    setIsLoading(true);
    event.preventDefault();
    const data = askedquistionbyAi();
    data
      .then((res) => {
        const quisionData = res?.message?.content;
        const questions = quisionData
          .split("\n")
          .map((question) => question.replace(/^\d+\.\s*/, "").trim());
        setAiQuistions(questions);
        localStorage.setItem("questions", JSON.stringify(questions));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    setTimeout(() => {
      setIsLoading(false);
      setDataAdded({
        ...dataAdded,
        basic: true,
        details: true,
      });
      setJobType("Details");
    }, 1000);
  };
  // console.log(aiQuisions);

  useEffect(() => {
    if (date) {
      // console.log(date);
      setInputData((prevInputData) => {
        const updatedInputData = {
          ...prevInputData,
          when: "",
          date: new Date(date),
        };

        localStorage.setItem("inputData", JSON.stringify(updatedInputData));

        return updatedInputData;
      });
    }
  }, [date]);

  // console.log(inputData);
  // console.log(aiQuisions);

  const handleCreateTask = async () => {
    const res = await axios.post("http://localhost:5000/api/v1/tasks", {
      what: inputData?.what,
      who: inputData?.who,
      where: inputData?.where,
      when: date || "",
      date: inputData?.date,
      details: inputData?.details,
      budget: inputData?.budget * 1,
      aiQuisions: [
        {
          question: aiQuisions[0] || "",
          answer: inputData?.aiQuistion1 || "",
        },
        {
          question: aiQuisions[1] || "",
          answer: inputData?.aiQuistion2 || "",
        },
        {
          question: aiQuisions[2] || "",
          answer: inputData?.aiQuistion3 || "",
        },
        {
          question: aiQuisions[3] || "",
          answer: inputData?.aiQuistion4 || "",
        },
        {
          question: aiQuisions[4] || "",
          answer: inputData?.aiQuistion5 || "",
        },
        {
          question: aiQuisions[5] || "",
          answer: inputData?.aiQuistion6 || "",
        },
      ],
    });
    if (res.data?._id) {
      alert("success");
      localStorage.clear();
      navigate("/");
    }
  };
  console.log(inputData);
  return (
    <>
      {isLoading && (
        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
          <div className="flex justify-center items-center mt-[50vh]">
            <svg
              fill="none"
              className="w-20 h-20 animate-spin"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="container mx-auto ">
        <div className="py-[35px] px-4 md:px-[30px] bg-[#F4F8FD] rounded-2xl mt-8">
          <div className="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.9998 11H4.41379L9.70679 5.70699C9.8023 5.61474 9.87848 5.5044 9.93089 5.38239C9.9833 5.26039 10.0109 5.12917 10.012 4.99639C10.0132 4.86361 9.98789 4.73193 9.93761 4.60904C9.88733 4.48614 9.81307 4.37449 9.71918 4.28059C9.62529 4.1867 9.51364 4.11245 9.39074 4.06217C9.26784 4.01189 9.13616 3.98659 9.00339 3.98774C8.87061 3.98889 8.73939 4.01648 8.61738 4.06889C8.49538 4.1213 8.38503 4.19748 8.29279 4.29299L1.29279 11.293C1.10532 11.4805 1 11.7348 1 12C1 12.2652 1.10532 12.5195 1.29279 12.707L8.29279 19.707C8.48139 19.8891 8.73399 19.9899 8.99619 19.9877C9.25838 19.9854 9.5092 19.8802 9.6946 19.6948C9.88001 19.5094 9.98518 19.2586 9.98746 18.9964C9.98974 18.7342 9.88894 18.4816 9.70679 18.293L4.41379 13H21.9998C22.265 13 22.5194 12.8946 22.7069 12.7071C22.8944 12.5196 22.9998 12.2652 22.9998 12C22.9998 11.7348 22.8944 11.4804 22.7069 11.2929C22.5194 11.1053 22.265 11 21.9998 11Z"
                  fill="#213F61"
                />
              </svg>
            </span>
            {/* <span className="font-clash text-[28px] font-semibold text-[#213F61]">
              Input task details
            </span> */}
            <span> </span>
          </div>
          <div className="flex justify-center mb-6">
            <div className="justify-center items-start border border-[color:var(--Stoke,rgba(33,63,97,0.05))] bg-white flex gap-2 mt-1 px-8 py-2  border-solid">
              <button
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5  ${
                  jobType === "Basics"
                    ? " border-b-2 border-cyan-900 "
                    : dataAdded.basic === true
                    ? "text-gray-800 "
                    : "text-gray-400 "
                }`}
                onClick={(e) => {
                  setJobType("Basics");
                }}
              >
                Basics
              </button>{" "}
              <button
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5  ${
                  jobType === "Details"
                    ? "border-b-2 border-cyan-900 "
                    : dataAdded.details === true
                    ? "text-gray-800 "
                    : "text-gray-400 "
                }`}
                onClick={(e) => {
                  setJobType("Details");
                }}
                disabled={!dataAdded?.basic}
              >
                Details
              </button>{" "}
              <button
                disabled={!dataAdded.details}
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5  ${
                  jobType === "Budget"
                    ? "border-b-2 border-cyan-900 "
                    : dataAdded.budget === true
                    ? "text-gray-800 "
                    : "text-gray-400 "
                }`}
                onClick={(e) => {
                  setJobType("Budget");
                }}
              >
                Budget
              </button>{" "}
              <button
                disabled={!dataAdded.summury}
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5  ${
                  jobType === "Summury"
                    ? "border-b-2 border-cyan-900 "
                    : dataAdded.summury === true
                    ? "text-gray-800 "
                    : "text-gray-400 "
                }`}
                onClick={(e) => {
                  setJobType("Summury");
                }}
              >
                Summury
              </button>
            </div>
          </div>
          {jobType === "Basics" && (
            <form onSubmit={handleSubmitData}>
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-9 mt-10">
                <div className="flex flex-col md:flex-row gap-9">
                  <div className="w-full md:w-1/2">
                    <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                      Title & Date
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="block pb-4">
                          In a few words, what do you need done?
                        </span>
                        <div>
                          <input
                            onChange={handleInputChange}
                            value={inputData?.what}
                            name="what"
                            type="text"
                            className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-8">
                        <div className="w-[60%]">
                          <span className="block pb-4">
                            When do you need done?
                          </span>
                          <div>
                            <DatePicker
                              date={date}
                              setDate={setDate}
                              className="w-full py-8 rounded-2xl bg-[#F4F8FD]  border border-[#F4F8FD] focus:border-[#E78C3B]"
                            />
                          </div>
                        </div>
                        <div className="w-[40%]">
                          <span className="block pb-4">I&rsquo;m Flexible</span>
                          <div>
                            {/* {console.log(inputData)} */}
                            <Button
                              onClick={() => {
                                setInputData({
                                  ...inputData,
                                  when: "flexible",
                                });
                                localStorage.setItem(
                                  "inputData",
                                  JSON.stringify({
                                    ...inputData,
                                    when: "flexible",
                                    date: null,
                                  })
                                );
                                setDate(null);
                              }}
                              name="when"
                              type="button"
                              variant="outline"
                              className={`py-8 w-full border-secondary hover:text-white hover:bg-secondary ${
                                inputData?.when === "flexible"
                                  ? "bg-secondary text-white"
                                  : ""
                              }  `}
                            >
                              Flexible
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                      Location
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="block pb-4">
                          Who do you need done?
                        </span>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                            <input
                              onChange={handleInputChange}
                              type="radio"
                              name="who"
                              value="InPerson"
                              checked={inputData?.who == "InPerson"}
                              id="InPerson"
                            />
                            <label htmlFor="InPerson">In person</label>
                          </div>
                          <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                            <input
                              onChange={handleInputChange}
                              type="radio"
                              name="who"
                              value="Online"
                              checked={inputData?.who == "Online"}
                              id="Online"
                            />
                            <label htmlFor="Online">Online</label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="block pb-4">
                          Where do you need done?
                        </span>
                        <div>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="where"
                            value={inputData?.where}
                            className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  justify-center mt-12">
                  <button
                    type="submit"
                    className="w-full sm:w-[280px] flex justify-center items-center gap-[10px] bg-[#E78C3B] py-[21px] px-[20px] rounded-full"
                    onClick={() => {
                      setDataAdded({
                        ...dataAdded,
                        details: true,
                      });
                    }}
                  >
                    <span className="text-white text-[16px] font-semibold">
                      Next
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1175)">
                          <path
                            d="M1.46169 9.62308C1.52716 9.63371 1.59341 9.63861 1.6597 9.63775L12.9474 9.63775L12.7013 9.75223C12.4607 9.8661 12.2418 10.0211 12.0544 10.2101L8.8891 13.3755C8.47221 13.7735 8.40217 14.4136 8.7231 14.8923C9.09662 15.4025 9.81294 15.5132 10.3231 15.1397C10.3643 15.1095 10.4035 15.0766 10.4403 15.0412L16.1642 9.31721C16.6116 8.87038 16.612 8.14555 16.1651 7.69823C16.1649 7.69794 16.1645 7.69762 16.1642 7.69733L10.4403 1.97337C9.9926 1.52694 9.26777 1.52794 8.8213 1.97563C8.78617 2.01086 8.75337 2.04836 8.7231 2.08785C8.40217 2.56655 8.47221 3.20674 8.8891 3.6047L12.0487 6.77577C12.2167 6.94391 12.4098 7.0849 12.6211 7.19362L12.9646 7.34817L1.7227 7.34817C1.13789 7.32645 0.62481 7.73496 0.514946 8.30979C0.413739 8.93388 0.837599 9.52184 1.46169 9.62308Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1175">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(16.5 16.5) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
          {jobType === "Details" && (
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-9 mt-10">
              <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                Detail
              </h3>
              <div className="flex flex-col md:flex-row gap-9">
                <div className="w-full">
                  <div className="w-full">
                    <span className="block pb-4">What are the details?</span>
                    <textarea
                      onChange={handleInputChange}
                      name="details"
                      id=""
                      value={inputData?.details}
                      placeholder="Write your task summery here..."
                      className="w-full max-h-[225px] h-[225px] resize-none bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full">
                  <span className="block pb-4">Add images (optional)</span>
                  <div>
                    <div className="w-full flex flex-col gap-3">
                      <div className="focus:bg-[#00a2a4] overflow-hidden relative w-full bg-[#F4F8FD] flex justify-center py-4 rounded-2xl">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="absolute top-0 right-0 w-full h-full opacity-0 font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
                        />
                        <div
                          className="w-full text-center text-[#A7A7A7] font-Jost text-[16px] md:text-[18px]"
                          onClick={() => {
                            document.getElementById("fileInput").click();
                          }}
                        >
                          <div className="flex flex-col gap-3 items-center py-[50px]">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="36"
                                viewBox="0 0 37 36"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_283_1350)">
                                  <path
                                    d="M4.65026 2.19171H25.6347C27.9197 2.19171 29.785 4.057 29.785 6.34197V27.9326C29.785 30.2176 27.9197 32.0829 25.6347 32.0829H4.65026C2.36528 32.0829 0.5 30.2176 0.5 27.9326V6.29534C0.5 4.057 2.36528 2.19171 4.65026 2.19171Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.0699 21.7306L7.91451 15.5751L0.5 22.9896V24.5285V27.886C0.5 30.171 2.36528 32.0363 4.65026 32.0363H25.6347C27.9197 32.0363 29.785 30.171 29.785 27.886V24.5285V19.9119L22.8368 12.9171L14.0699 21.7306Z"
                                    fill="#213F61"
                                  />
                                  <path
                                    d="M13.8848 14.6892C15.3271 14.6892 16.4962 13.52 16.4962 12.0778C16.4962 10.6355 15.3271 9.46637 13.8848 9.46637C12.4426 9.46637 11.2734 10.6355 11.2734 12.0778C11.2734 13.52 12.4426 14.6892 13.8848 14.6892Z"
                                    fill="#213F61"
                                  />
                                  <path
                                    d="M29.7853 33.8083C33.4939 33.8083 36.5004 30.8019 36.5004 27.0933C36.5004 23.3847 33.4939 20.3782 29.7853 20.3782C26.0767 20.3782 23.0703 23.3847 23.0703 27.0933C23.0703 30.8019 26.0767 33.8083 29.7853 33.8083Z"
                                    fill="#FAFFFB"
                                  />
                                  <path
                                    d="M28.8047 23.9689C28.8047 23.4093 29.2244 22.9896 29.784 22.9896C30.2969 22.9896 30.7632 23.4093 30.7632 23.9689V30.3109C30.7632 30.8705 30.3435 31.2901 29.784 31.2901C29.2244 31.2901 28.8047 30.8705 28.8047 30.3109V23.9689Z"
                                    fill="#213F61"
                                  />
                                  <path
                                    d="M29.0845 24.6217C28.7114 24.2487 28.7114 23.6425 29.0845 23.2694C29.4575 22.8964 30.0638 22.8964 30.4368 23.2694L32.6752 25.5078C33.0482 25.8808 33.0482 26.487 32.6752 26.8601C32.3021 27.2331 31.6959 27.2331 31.3228 26.8601L29.0845 24.6217Z"
                                    fill="#213F61"
                                  />
                                  <path
                                    d="M29.0848 23.2694C29.4578 22.8964 30.0641 22.8964 30.4371 23.2694C30.8102 23.6425 30.8102 24.2487 30.4371 24.6218L28.2454 26.8601C27.8723 27.2332 27.2661 27.2332 26.8931 26.8601C26.52 26.487 26.52 25.8808 26.8931 25.5078L29.0848 23.2694Z"
                                    fill="#213F61"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_283_1350">
                                    <rect
                                      width="36"
                                      height="36"
                                      fill="white"
                                      transform="translate(0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <div>
                              <p className="text-[14px] text-[#475467] mb-1">
                                <span className="text-[#213F61] font-bold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-[14px] text-[#475467]">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {selectedFile && (
                      <div className="mt-2 font-Jost text-[14px]">
                        <p>Uploded file: {selectedFile.name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-[60px]">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setJobType("Basics")}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] py-[21px] px-[20px] bg-[#E78C3B40] rounded-full"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1168)">
                          <path
                            d="M15.5383 7.37692C15.4728 7.36629 15.4066 7.36139 15.3403 7.36225H4.05262L4.29875 7.24777C4.53933 7.1339 4.7582 6.97892 4.94556 6.78985L8.1109 3.6245C8.52779 3.22654 8.59783 2.58636 8.2769 2.10765C7.90338 1.59754 7.18706 1.48678 6.67691 1.86031C6.6357 1.8905 6.59652 1.92341 6.55971 1.95883L0.835755 7.68279C0.388428 8.12962 0.388034 8.85445 0.834861 9.30177C0.835147 9.30206 0.835469 9.30238 0.835755 9.30267L6.55971 15.0266C7.0074 15.4731 7.73223 15.4721 8.1787 15.0244C8.21383 14.9891 8.24663 14.9516 8.2769 14.9121C8.59783 14.4334 8.52779 13.7933 8.1109 13.3953L4.95128 10.2242C4.78332 10.0561 4.59021 9.9151 4.37888 9.80638L4.03545 9.65183H15.2773C15.8621 9.67355 16.3752 9.26503 16.4851 8.69021C16.5863 8.06612 16.1624 7.47816 15.5383 7.37692Z"
                            fill="#E78C3B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1168">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[#E78C3B] text-[16px] font-semibold">
                      Back
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setDataAdded({
                        ...dataAdded,
                        budget: true,
                      });
                      setJobType("Budget");
                    }}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] bg-[#E78C3B] py-[21px] px-[20px] rounded-full"
                  >
                    <span className="text-white text-[16px] font-semibold">
                      Next
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1175)">
                          <path
                            d="M1.46169 9.62308C1.52716 9.63371 1.59341 9.63861 1.6597 9.63775L12.9474 9.63775L12.7013 9.75223C12.4607 9.8661 12.2418 10.0211 12.0544 10.2101L8.8891 13.3755C8.47221 13.7735 8.40217 14.4136 8.7231 14.8923C9.09662 15.4025 9.81294 15.5132 10.3231 15.1397C10.3643 15.1095 10.4035 15.0766 10.4403 15.0412L16.1642 9.31721C16.6116 8.87038 16.612 8.14555 16.1651 7.69823C16.1649 7.69794 16.1645 7.69762 16.1642 7.69733L10.4403 1.97337C9.9926 1.52694 9.26777 1.52794 8.8213 1.97563C8.78617 2.01086 8.75337 2.04836 8.7231 2.08785C8.40217 2.56655 8.47221 3.20674 8.8891 3.6047L12.0487 6.77577C12.2167 6.94391 12.4098 7.0849 12.6211 7.19362L12.9646 7.34817L1.7227 7.34817C1.13789 7.32645 0.62481 7.73496 0.514946 8.30979C0.413739 8.93388 0.837599 9.52184 1.46169 9.62308Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1175">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(16.5 16.5) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {jobType === "Budget" && (
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-9 mt-10">
              <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                Budget
              </h3>
              <div className="flex gap-9">
                <div className="w-full md:w-1/2 p-0 md:pr-5">
                  <div className="w-full">
                    <span className="block pb-4">What is your budget?</span>
                    <input
                      onChange={handleInputChange}
                      value={inputData?.budget}
                      name="budget"
                      type="number"
                      className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-[60px]">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setJobType("Details")}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] py-[21px] px-[20px] bg-[#E78C3B40] rounded-full"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1168)">
                          <path
                            d="M15.5383 7.37692C15.4728 7.36629 15.4066 7.36139 15.3403 7.36225H4.05262L4.29875 7.24777C4.53933 7.1339 4.7582 6.97892 4.94556 6.78985L8.1109 3.6245C8.52779 3.22654 8.59783 2.58636 8.2769 2.10765C7.90338 1.59754 7.18706 1.48678 6.67691 1.86031C6.6357 1.8905 6.59652 1.92341 6.55971 1.95883L0.835755 7.68279C0.388428 8.12962 0.388034 8.85445 0.834861 9.30177C0.835147 9.30206 0.835469 9.30238 0.835755 9.30267L6.55971 15.0266C7.0074 15.4731 7.73223 15.4721 8.1787 15.0244C8.21383 14.9891 8.24663 14.9516 8.2769 14.9121C8.59783 14.4334 8.52779 13.7933 8.1109 13.3953L4.95128 10.2242C4.78332 10.0561 4.59021 9.9151 4.37888 9.80638L4.03545 9.65183H15.2773C15.8621 9.67355 16.3752 9.26503 16.4851 8.69021C16.5863 8.06612 16.1624 7.47816 15.5383 7.37692Z"
                            fill="#E78C3B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1168">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[#E78C3B] text-[16px] font-semibold">
                      Back
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setDataAdded({
                        ...dataAdded,
                        summury: true,
                      });
                      setJobType("Summury");
                    }}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] bg-[#E78C3B] py-[21px] px-[20px] rounded-full"
                  >
                    <span className="text-white text-[16px] font-semibold">
                      Procced Task
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1175)">
                          <path
                            d="M1.46169 9.62308C1.52716 9.63371 1.59341 9.63861 1.6597 9.63775L12.9474 9.63775L12.7013 9.75223C12.4607 9.8661 12.2418 10.0211 12.0544 10.2101L8.8891 13.3755C8.47221 13.7735 8.40217 14.4136 8.7231 14.8923C9.09662 15.4025 9.81294 15.5132 10.3231 15.1397C10.3643 15.1095 10.4035 15.0766 10.4403 15.0412L16.1642 9.31721C16.6116 8.87038 16.612 8.14555 16.1651 7.69823C16.1649 7.69794 16.1645 7.69762 16.1642 7.69733L10.4403 1.97337C9.9926 1.52694 9.26777 1.52794 8.8213 1.97563C8.78617 2.01086 8.75337 2.04836 8.7231 2.08785C8.40217 2.56655 8.47221 3.20674 8.8891 3.6047L12.0487 6.77577C12.2167 6.94391 12.4098 7.0849 12.6211 7.19362L12.9646 7.34817L1.7227 7.34817C1.13789 7.32645 0.62481 7.73496 0.514946 8.30979C0.413739 8.93388 0.837599 9.52184 1.46169 9.62308Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1175">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(16.5 16.5) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {jobType === "Summury" && (
            <>
              <div className="flex flex-col gap-9 bg-white rounded-2xl p-4 sm:p-6 md:p-9 mt-10">
                <div className="flex flex-col md:flex-row gap-9">
                  <div className="w-full md:w-1/2">
                    <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                      Title & Date
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="block pb-4">
                          In a few words, what do you need done?
                        </span>
                        <div>
                          <input
                            onChange={handleInputChange}
                            name="what"
                            value={inputData?.what}
                            type="text"
                            className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="block pb-4">
                          When do you need done?
                        </span>
                        <div>
                          <DatePicker
                            date={date}
                            setDate={setDate}
                            className="w-full py-8 rounded-2xl bg-[#F4F8FD]  border border-[#F4F8FD] focus:border-[#E78C3B]"
                          />
                          {/* <DatePicker
                            // onChange={handleInputChange}
                            // type="date"
                            // name="when"
                            // value={inputData?.when}
                            className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                      Location
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="block pb-4">
                          Who do you need done?
                        </span>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                            <input
                              onChange={handleInputChange}
                              type="radio"
                              name="who"
                              value="InPerson"
                              checked={inputData?.who == "InPerson"}
                              id="InPerson"
                            />
                            <label htmlFor="InPerson">In person</label>
                          </div>
                          <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                            <input
                              onChange={handleInputChange}
                              type="radio"
                              name="who"
                              value="Online"
                              checked={inputData?.who == "Online"}
                              id="Online"
                            />
                            <label htmlFor="Online">Online</label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="block pb-4">
                          Where do you need done?
                        </span>
                        <div>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            name="where"
                            value={inputData?.where}
                            className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-9">
                  {aiQuisions
                    ?.filter((question) => question.trim() !== "")
                    ?.map((ques, i) => (
                      <div key={i} className="w-full">
                        <div className="flex flex-col gap-5">
                          <div>
                            <span className="block pb-4">
                              {ques}{" "}
                              <span className="text-[#E78C3B]">(optional)</span>
                            </span>
                            <div>
                              <input
                                name={`aiQuistion${i + 1}`}
                                onChange={handleInputChange}
                                value={inputData[`aiQuistion${i + 1}`]}
                                type="text"
                                className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div>
                  <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                    Detail
                  </h3>
                  <div className="flex flex-col md:flex-row gap-9">
                    <div className="w-full">
                      <div className="w-full">
                        <span className="block pb-4">
                          What are the details?
                        </span>
                        <textarea
                          onChange={handleInputChange}
                          name="details"
                          value={inputData?.details}
                          id=""
                          placeholder="Write your task summery here..."
                          className="w-full max-h-[225px] h-[225px] resize-none bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="block pb-4">Add images (optional)</span>
                      <div>
                        <div className="w-full flex flex-col gap-3">
                          <div className="focus:bg-[#00a2a4] overflow-hidden relative w-full bg-[#F4F8FD] flex justify-center py-4 rounded-2xl">
                            <input
                              type="file"
                              onChange={handleFileChange}
                              className="absolute top-0 right-0 w-full h-full opacity-0 font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
                            />
                            <div
                              className="w-full text-center text-[#A7A7A7] font-Jost text-[16px] md:text-[18px]"
                              onClick={() => {
                                document.getElementById("fileInput").click();
                              }}
                            >
                              <div className="flex flex-col gap-3 items-center py-[50px]">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="37"
                                    height="36"
                                    viewBox="0 0 37 36"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_283_1350)">
                                      <path
                                        d="M4.65026 2.19171H25.6347C27.9197 2.19171 29.785 4.057 29.785 6.34197V27.9326C29.785 30.2176 27.9197 32.0829 25.6347 32.0829H4.65026C2.36528 32.0829 0.5 30.2176 0.5 27.9326V6.29534C0.5 4.057 2.36528 2.19171 4.65026 2.19171Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M14.0699 21.7306L7.91451 15.5751L0.5 22.9896V24.5285V27.886C0.5 30.171 2.36528 32.0363 4.65026 32.0363H25.6347C27.9197 32.0363 29.785 30.171 29.785 27.886V24.5285V19.9119L22.8368 12.9171L14.0699 21.7306Z"
                                        fill="#213F61"
                                      />
                                      <path
                                        d="M13.8848 14.6892C15.3271 14.6892 16.4962 13.52 16.4962 12.0778C16.4962 10.6355 15.3271 9.46637 13.8848 9.46637C12.4426 9.46637 11.2734 10.6355 11.2734 12.0778C11.2734 13.52 12.4426 14.6892 13.8848 14.6892Z"
                                        fill="#213F61"
                                      />
                                      <path
                                        d="M29.7853 33.8083C33.4939 33.8083 36.5004 30.8019 36.5004 27.0933C36.5004 23.3847 33.4939 20.3782 29.7853 20.3782C26.0767 20.3782 23.0703 23.3847 23.0703 27.0933C23.0703 30.8019 26.0767 33.8083 29.7853 33.8083Z"
                                        fill="#FAFFFB"
                                      />
                                      <path
                                        d="M28.8047 23.9689C28.8047 23.4093 29.2244 22.9896 29.784 22.9896C30.2969 22.9896 30.7632 23.4093 30.7632 23.9689V30.3109C30.7632 30.8705 30.3435 31.2901 29.784 31.2901C29.2244 31.2901 28.8047 30.8705 28.8047 30.3109V23.9689Z"
                                        fill="#213F61"
                                      />
                                      <path
                                        d="M29.0845 24.6217C28.7114 24.2487 28.7114 23.6425 29.0845 23.2694C29.4575 22.8964 30.0638 22.8964 30.4368 23.2694L32.6752 25.5078C33.0482 25.8808 33.0482 26.487 32.6752 26.8601C32.3021 27.2331 31.6959 27.2331 31.3228 26.8601L29.0845 24.6217Z"
                                        fill="#213F61"
                                      />
                                      <path
                                        d="M29.0848 23.2694C29.4578 22.8964 30.0641 22.8964 30.4371 23.2694C30.8102 23.6425 30.8102 24.2487 30.4371 24.6218L28.2454 26.8601C27.8723 27.2332 27.2661 27.2332 26.8931 26.8601C26.52 26.487 26.52 25.8808 26.8931 25.5078L29.0848 23.2694Z"
                                        fill="#213F61"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_283_1350">
                                        <rect
                                          width="36"
                                          height="36"
                                          fill="white"
                                          transform="translate(0.5)"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <div>
                                  <p className="text-[14px] text-[#475467] mb-1">
                                    <span className="text-[#213F61] font-bold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p className="text-[14px] text-[#475467]">
                                    SVG, PNG, JPG or GIF (max. 800x400px)
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {selectedFile && (
                          <div className="mt-2 font-Jost text-[14px]">
                            <p>Uploded file: {selectedFile.name}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                    Budget
                  </h3>
                  <div className="flex gap-9">
                    <div className="w-full md:w-1/2 p-0 md:pr-5">
                      <div className="w-full">
                        <span className="block pb-4">What is your budget?</span>
                        <input
                          onChange={handleInputChange}
                          value={inputData?.budget}
                          name="budget"
                          type="number"
                          className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-[60px]">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setJobType("Budget")}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] py-[21px] px-[20px] bg-[#E78C3B40] rounded-full"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1168)">
                          <path
                            d="M15.5383 7.37692C15.4728 7.36629 15.4066 7.36139 15.3403 7.36225H4.05262L4.29875 7.24777C4.53933 7.1339 4.7582 6.97892 4.94556 6.78985L8.1109 3.6245C8.52779 3.22654 8.59783 2.58636 8.2769 2.10765C7.90338 1.59754 7.18706 1.48678 6.67691 1.86031C6.6357 1.8905 6.59652 1.92341 6.55971 1.95883L0.835755 7.68279C0.388428 8.12962 0.388034 8.85445 0.834861 9.30177C0.835147 9.30206 0.835469 9.30238 0.835755 9.30267L6.55971 15.0266C7.0074 15.4731 7.73223 15.4721 8.1787 15.0244C8.21383 14.9891 8.24663 14.9516 8.2769 14.9121C8.59783 14.4334 8.52779 13.7933 8.1109 13.3953L4.95128 10.2242C4.78332 10.0561 4.59021 9.9151 4.37888 9.80638L4.03545 9.65183H15.2773C15.8621 9.67355 16.3752 9.26503 16.4851 8.69021C16.5863 8.06612 16.1624 7.47816 15.5383 7.37692Z"
                            fill="#E78C3B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1168">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.5 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[#E78C3B] text-[16px] font-semibold">
                      Back
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCreateTask}
                    className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] bg-[#E78C3B] py-[21px] px-[20px] rounded-full"
                  >
                    <span className="text-white text-[16px] font-semibold">
                      Procced task
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_283_1175)">
                          <path
                            d="M1.46169 9.62308C1.52716 9.63371 1.59341 9.63861 1.6597 9.63775L12.9474 9.63775L12.7013 9.75223C12.4607 9.8661 12.2418 10.0211 12.0544 10.2101L8.8891 13.3755C8.47221 13.7735 8.40217 14.4136 8.7231 14.8923C9.09662 15.4025 9.81294 15.5132 10.3231 15.1397C10.3643 15.1095 10.4035 15.0766 10.4403 15.0412L16.1642 9.31721C16.6116 8.87038 16.612 8.14555 16.1651 7.69823C16.1649 7.69794 16.1645 7.69762 16.1642 7.69733L10.4403 1.97337C9.9926 1.52694 9.26777 1.52794 8.8213 1.97563C8.78617 2.01086 8.75337 2.04836 8.7231 2.08785C8.40217 2.56655 8.47221 3.20674 8.8891 3.6047L12.0487 6.77577C12.2167 6.94391 12.4098 7.0849 12.6211 7.19362L12.9646 7.34817L1.7227 7.34817C1.13789 7.32645 0.62481 7.73496 0.514946 8.30979C0.413739 8.93388 0.837599 9.52184 1.46169 9.62308Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_283_1175">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(16.5 16.5) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}
