import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MakeOffer({ open, setOpen, taskId, fetchSingleData }) {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    offer_amount: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/v1/offers", {
      ...formData,
      userId: user?._id,
      taskId: taskId,
    });
    if (res.data?._id) {
      fetchSingleData();
      alert("success");
      setOpen(false);
    }
  };
  return (
    <div className="h-min overflow-y-auto ">
      <DialogHeader className={" px-4 md:px-6"}>
        <DialogTitle className="text-xl font-bold tracking-tighter sm:text-2xl">
          Make an offer
        </DialogTitle>
        <DialogDescription className=" text-gray-500 md:text-md/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
          Detailed information about the proposal
        </DialogDescription>
      </DialogHeader>
      <main className={" px-4 md:px-6 w-full py-12"}>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Offer Title</h3>
          <input
            onChange={handleFormChange}
            className="border rounded p-2 border-gray-300 w-full"
            type="text"
            name="title"
            id=""
            value={formData.title}
          />
        </div>
        <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Offer Details</h3>
            <textarea
              onChange={handleFormChange}
              value={formData.body}
              name="body"
              className="text-sm text-gray-500 dark:text-gray-400 outline-none w-full h-24 border rounded p-2 border-gray-300"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Offer Amount</h3>
            <input
              onChange={handleFormChange}
              className="border rounded p-2 border-gray-300"
              type="number"
              name="offer_amount"
              id=""
              value={formData.offer_amount}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
          <Button
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-green-400  "
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
          <Button
            className="text-gray-800 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Cancel
          </Button>
        </div>
      </main>
    </div>
  );
}
