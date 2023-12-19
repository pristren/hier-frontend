import { useState } from "react";

const categories = ["cleaning", "barbers", "design", "driving", "loundry"];

const FilterSection = ({ filter, setFilter }) => {
  // Adding category or removing category
  const setCategoryInFilter = (category) => {
    const isExistCategory = filter?.category?.find((cat) => cat === category);
    if (!isExistCategory) {
      setFilter((prevFilter) => {
        const updatedFilter = { ...prevFilter };
        updatedFilter?.category.push(category);
        return updatedFilter;
      });
    } else {
      const index = filter?.category?.indexOf(category);
      setFilter((prevFilter) => {
        const updatedFilter = { ...prevFilter };
        updatedFilter?.category.splice(index, 1);
        return updatedFilter;
      });
    }
  };

  const handleClearFilter = () => {
    setFilter({
      taskTitle: "",
      category: [],
      toBeDone: "all",
      distance: 1,
      taskPrice: 250,
      priceSorting: "highToLow",
      taskCategory: "available",
      location: "",
    });
  };

  const [catSearch, setCatSearch] = useState("");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-secondary font-bold text-lg">Filter</h2>
        <p
          className="text-secondary cursor-pointer"
          onClick={handleClearFilter}
        >
          Clear all
        </p>
      </div>
      <hr className="my-5" />

      {/* Category  */}
      <div className="bg-[#F4F8FD] p-10 rounded-xl lg:p-6">
        <h2 className="mb-3">Category</h2>
        <div className="relative flex flex-row min-w-full">
          <div className="w-full">
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
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-l-lg bg-white"
              placeholder="Search here..."
              required
              value={catSearch}
              onChange={(e) => setCatSearch(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-secondary hover:bg-secondary font-medium rounded-r-lg text-sm px-5 py-3"
          >
            Search
          </button>
        </div>

        <div className="flex flex-col gap-3 my-3 text-sm">
          {categories
            .filter((c) => {
              return c.toLowerCase().includes(catSearch.toLowerCase());
            })
            .map((cat, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={cat}
                  className="checkbox"
                  onChange={(e) => setCategoryInFilter(cat)}
                />
                <label htmlFor={cat}>{cat}</label>
              </div>
            ))}
        </div>
      </div>

      {/* To be done  */}
      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-start gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-secondary text-xl tracking-normal leading-normal">
              To Be Done
            </div>
          </div>
          <div className=" gap-[10px] w-full flex-[0_0_auto] flex flex-wrap relative cursor-pointer">
            <div
              onClick={() => setFilter({ ...filter, toBeDone: "all" })}
              className={`min-w-max ${
                filter?.toBeDone === "all"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold max-w-max',Helvetica] font-normal ${
                  filter?.toBeDone === "all"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                All
              </div>
            </div>
            <div
              onClick={() => setFilter({ ...filter, toBeDone: "in_person" })}
              className={`min-w-max ${
                filter?.toBeDone === "in_person"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.toBeDone === "in_person"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                In person
              </div>
            </div>
            <div
              onClick={() => setFilter({ ...filter, toBeDone: "remotely" })}
              className={`min-w-max ${
                filter?.toBeDone === "remotely"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.toBeDone === "remotely"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Remotely
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub hub  */}
      <div className="bg-[#f4f8fd] mt-4 flex flex-col items-start gap-6 p-6 relative bg-accent rounded-xl overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <div className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-secondary text-xl tracking-normal leading-normal">
            Location
          </div>
          <div
            className="cursor-pointer [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-secondary text-base tracking-[0.20px] leading-normal"
            onClick={(e) => setFilter({ ...filter, location: "" })}
          >
            Clear all
          </div>
        </div>
        <div className="h-[60px] w-full rounded-xl overflow-hidden flex items-center relative self-stretch">
          <input
            type="text"
            placeholder="Dhaka, Bangladesh"
            className="w-full py-4 px-5 bg-white [font-family:'Clash_Display-Regular',Helvetica] font-normal text-secondary text-base tracking-normal leading-normal rounded-xl"
            value={filter?.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          />
        </div>
      </div>

      {/* Distance  */}
      <div className="bg-[#f4f8fd] rounded-xl mt-4 p-6">
        <div>
          <p className="font-medium text-secondary text-xl">Distance</p>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p>5km</p>
            <p>500km</p>
          </div>
          <div>
            <input
              className="w-full bg-transparent accent-secondary range-slider"
              type="range"
              value={filter?.distance}
              onChange={(e) =>
                setFilter({ ...filter, distance: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Task Price  */}
      <div className="bg-[#f4f8fd] rounded-xl mt-4 p-6">
        <div>
          <p className="font-medium text-secondary text-xl">Task Price</p>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p>5$</p>
            <p>500$</p>
          </div>
          <div>
            <input
              className="w-full bg-transparent accent-secondary range-slider"
              type="range"
              value={filter?.taskPrice}
              min={5}
              max={500}
              onChange={(e) =>
                setFilter({ ...filter, taskPrice: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Task Category  */}
      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col  gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-secondary text-xl tracking-normal leading-normal">
              Task catagory
            </div>
          </div>
          <div className="items-center gap-[16px] w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() =>
                setFilter({ ...filter, taskCategory: "available" })
              }
              className={`min-w-max ${
                filter?.taskCategory === "available"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.taskCategory === "available"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Available tasks
              </div>
            </div>
            <div
              onClick={() =>
                setFilter({ ...filter, taskCategory: "noOfferTask" })
              }
              className={`min-w-max ${
                filter?.taskCategory === "noOfferTask"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.taskCategory === "noOfferTask"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                No offers tasks
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Sorting  */}
      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-center gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-secondary text-xl tracking-normal leading-normal">
              Price Sorting
            </div>
          </div>
          <div className="items-center gap-6  w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() =>
                setFilter({ ...filter, priceSorting: "highToLow" })
              }
              className={
                filter?.priceSorting === "highToLow"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center "
              }
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.priceSorting === "highToLow"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                high to low
              </div>
            </div>
            <div
              onClick={() =>
                setFilter({ ...filter, priceSorting: "lowToHigh" })
              }
              className={
                filter?.priceSorting === "lowToHigh"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center "
              }
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  filter?.priceSorting === "lowToHigh"
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                low to high
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-start gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-secondary text-xl tracking-normal leading-normal">
              Date Sorting
            </div>
          </div>
          <div className="items-center gap-[16px] w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => handleDataSorting("earliest")}
              className={`min-w-max ${
                datasorting.includes("earliest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("earliest")
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Earliest
              </div>
            </div>
            <div
              onClick={() => handleDataSorting("lowest")}
              className={`min-w-max ${
                datasorting.includes("lowest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("lowest")
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-xl tracking-[0.20px] leading-normal`}
              >
                Latest
              </div>
            </div>
          </div>
          <div className="items-center gap-[16px]  w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => handleDataSorting("oldest")}
              className={`min-w-max ${
                datasorting.includes("oldest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("oldest")
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Oldest task
              </div>
            </div>
            <div
              onClick={() => handleDataSorting("close")}
              className={`min-w-max ${
                datasorting.includes("close")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-secondary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("close")
                    ? "text-[#fdf3eb]"
                    : "text-secondary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Close to me
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FilterSection;
