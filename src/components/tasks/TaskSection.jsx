import { useEffect, useState } from "react";
import Card from "./TaskCard";
import FilterSection from "./FilterSection";
import { Link } from "react-router-dom";
// import MyMap from "./Map";
import PropTypes from "prop-types";

const TaskSection = ({
  originalData,
  filter,
  setFilter,
  handleSearchSubmit,
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(originalData);

  useEffect(() => {
    const applyFilters = () => {
      const filteredResult = originalData
        ?.filter((item) => {
          return (
            ((filter?.taskTitle === "" ||
              item?.taskTitle
                .toLowerCase()
                .includes(filter?.taskTitle?.toLowerCase())) &&
              (filter?.category?.length === 0 ||
                filter?.category?.includes(item?.carl_category_name)) &&
              (filter?.taskPrice === "" ||
                parseInt(item?.amount) <= parseInt(filter?.taskPrice)) &&
              (filter?.taskCategory === "available"
                ? item?.taskStatus === "Open"
                : filter?.taskCategory === "noOfferTask" &&
                  item?.offered?.length === 0) &&
              (filter?.location === "" ||
                item?.location
                  .toLowerCase()
                  .includes(filter?.location?.toLowerCase())) &&
              filter?.toBeDone === "all") ||
            item?.toBeDone === filter?.toBeDone
          );
        })
        .sort((a, b) => {
          const sortOrder = filter?.priceSorting === "highToLow" ? -1 : 1;
          return sortOrder * (parseInt(a?.amount) - parseInt(b?.amount));
        });

      setFilteredData(filteredResult);
    };

    applyFilters();
  }, [filter, originalData]);

  return (
    <div className="relative">
      <div>
        <div>{/* <MyMap /> */}</div>
        <div>
          <div className="mt-10 flex ml-3 justify-between min-w-full">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-lg bg-white"
                placeholder="Search here..."
                value={filter?.taskTitle}
                onChange={(e) =>
                  setFilter({ ...filter, taskTitle: e.target.value })
                }
                required
              />
              <button
                type="submit"
                className="text-white absolute right-0 bottom-0 bg-secondary hover:bg-secondary font-medium rounded-lg text-sm px-10 py-[16.5px] "
                onClick={() => handleSearchSubmit(filter?.taskTitle)}
              >
                Search
              </button>
            </div>

            {/* Filter */}
            <button
              className="w-max mx-2 sm:hidden block"
              onClick={(e) => setOpenFilter(true)}
            >
              {/* <Image className="" src={filterIcons} width={50} height={50} /> */}
              <span className="">
                <svg
                  className="w-8 h-8 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs />
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 15.205 90 c -1.104 0 -2 -0.896 -2 -2 V 55.115 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 17.205 89.104 16.31 90 15.205 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 74.795 59.357 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 55.357 C 76.795 58.462 75.899 59.357 74.795 59.357 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 45 90 c -1.104 0 -2 -0.896 -2 -2 V 27.922 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 47 89.104 46.104 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 45 29.922 c -5.464 0 -9.91 -4.445 -9.91 -9.91 s 4.445 -9.91 9.91 -9.91 c 5.465 0 9.91 4.445 9.91 9.91 S 50.465 29.922 45 29.922 z M 45 14.103 c -3.259 0 -5.91 2.651 -5.91 5.91 s 2.651 5.91 5.91 5.91 s 5.91 -2.651 5.91 -5.91 S 48.259 14.103 45 14.103 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 15.205 57.115 c -5.464 0 -9.91 -4.445 -9.91 -9.91 c 0 -5.464 4.445 -9.91 9.91 -9.91 s 9.91 4.445 9.91 9.91 C 25.115 52.67 20.669 57.115 15.205 57.115 z M 15.205 41.295 c -3.259 0 -5.91 2.651 -5.91 5.91 s 2.651 5.91 5.91 5.91 s 5.91 -2.651 5.91 -5.91 S 18.464 41.295 15.205 41.295 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 74.795 75.177 c -5.464 0 -9.909 -4.445 -9.909 -9.91 c 0 -5.464 4.445 -9.909 9.909 -9.909 c 5.465 0 9.91 4.445 9.91 9.909 C 84.705 70.731 80.26 75.177 74.795 75.177 z M 74.795 59.357 c -3.259 0 -5.909 2.65 -5.909 5.909 s 2.65 5.91 5.909 5.91 s 5.91 -2.651 5.91 -5.91 S 78.054 59.357 74.795 59.357 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 15.205 41.295 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 37.295 C 17.205 40.4 16.31 41.295 15.205 41.295 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 45 14.103 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 10.103 C 47 13.207 46.104 14.103 45 14.103 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 74.795 90 c -1.104 0 -2 -0.896 -2 -2 V 73.177 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 76.795 89.104 75.899 90 74.795 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="rounded-xl shadow mt-10">
          {console.log(originalData)}
          {originalData?.length > 0 ? (
            originalData.map((item, idx) => (
              <Link key={idx} to={`/browse-tasks/${item?._id}`}>
                <Card key={idx} item={item} />
              </Link>
            ))
          ) : (
            <div className="flex justify-center py-6 px-3">
              <h2 className="text-center text-[22px]">No job found!</h2>
            </div>
          )}
        </div>
      </div>

      <div
        className={`absolute bg-white transition-all duration-500 w-full [transition-timing-function: cubic-bezier(0, 0, 0, 0.8)] ${
          openFilter
            ? "visible md:invisible top-0 md:top-[100%] md:-z-[999px] z-[999px] inset-0"
            : "invisible top-[100%] left-0 right-0 -z-[999px] inset-auto"
        }`}
      >
        <div className="relative mb-3 transition duration-300">
          <span
            className="absolute right-1 -top-6"
            onClick={(e) => setOpenFilter(false)}
          >
            <svg
              stroke="currentColor"
              className="font-bold text-2xl text-primary"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="1.5rem"
              width="1.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;

TaskSection.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  originalData: PropTypes.array.isRequired,
};
