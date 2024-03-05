import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from '@mui/material/Button';

function RevenusCard({ title, orderCount, amount, nextPaymentDate = true }) {
  return (
    <>
      <div className=" rounded-lg m-2 shadow-lg w-1/3 font-semibold bg-blue-600">
        <div className="p-6 hover:bg-blue-900 rounded-lg">
          <div className="flex items-center">
            {title}{" "}
            <span className="ml-2">
              {" "}
              <FaRegCircleQuestion />{" "}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <h1 className="flex items-center text-2xl">${amount}</h1>
            </div>
            <div>
              <Button>jflakjsf</Button>
              <a href="#" className=" flex items-center ">
                <span className="text-blue-500 underline  decoration-1">
                  {" "}
                  {orderCount} Order(s)
                </span>
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        {nextPaymentDate && (
          <div className=" font-semibold bg-blue-900 rounded-md  px-6 py-1 flex justify-between">
            <h2>Next Payment Date:</h2>
            <h2>Today , 40:00PM</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default RevenusCard;
