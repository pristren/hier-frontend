import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

import CheckoutForm from "@/components/payment/CheckoutForm";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51JyhgIBE09fAS3MBDoiKnzpbPMQSPZM5BP0sW4yshos9Tth8LmB3z9KZdUO9m05ljd1My2XIH2fc4rCDzVj4DilV00NhqihEXM"
);
export default function OfferDetails({ open, setOpen, modalData }) {
  // const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   fetch("/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", {
        amount: Number(modalData?.offer_amount || modalData?.taskId?.budget),
      })
      .then(async (result) => {
        var { clientSecret } = await result.data;
        setClientSecret(clientSecret);
      });

    // fetch("", {
    //   method: "POST",
    //   body: {  },
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    // });
  }, [modalData?.offer_amount, modalData?.taskId?.budget]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // console.log(modalData);

  return (
    <div className="h-min overflow-y-auto ">
      <DialogHeader className={" px-4 md:px-6"}>
        <DialogTitle className="text-xl font-bold tracking-tighter sm:text-2xl">
          Service Proposal
        </DialogTitle>
        <DialogDescription className=" text-gray-500 md:text-md/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
          Detailed information about the proposal
        </DialogDescription>
      </DialogHeader>
      <main className="w-full py-12 ">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Tesk Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Address: {modalData?.taskId?.where}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Budget: ${modalData?.taskId?.budget}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Date: {modalData?.taskId?.when}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Additional Details: {modalData?.taskId?.details}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Applicant&lsquo;s Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Name: {modalData?.userId?.first_name}{" "}
                {modalData?.userId?.last_name}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Description: {modalData?.body || "missing"}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold text-secondary">
                Offer amount: ${modalData?.offer_amount || "missing"}
              </p>
            </div>
          </div>
          <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Cover Letter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {modalData?.cover_letter || "No cover later"}
              </p>
            </div>
            {/* <div className="space-y-4">
              <h3 className="text-lg font-bold">Files</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">Resume.pdf</Link>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">Portfolio.pdf</Link>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">References.pdf</Link>
              </p>
            </div> */}
          </div>
          {clientSecret && (
            <>
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm
                  open={open}
                  setOpen={setOpen}
                  amount={
                    Number(modalData?.offer_amount) ||
                    Number(modalData?.taskId?.budget)
                  }
                />
              </Elements>
            </>
          )}
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
            {/* <Button
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-green-400  "
              onClick={() => {
                setOpen(!open);
              }}
            >
              Accept Proposal
            </Button> */}
            {/* <Button
              className="text-gray-800 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Decline Proposal
            </Button> */}
          </div>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
