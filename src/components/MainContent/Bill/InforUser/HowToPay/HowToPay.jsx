import React from "react";
import Pay1 from "./Pay/Pay1";
import { useState } from "react";
import PrePay from "./Pay/PrePay";
function HowToPay() {
  let [activeBanking, setActiveBanking] = useState(false);
  console.log(activeBanking);
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Pay1 />
        <button
          id="button-pay"
          className={
            "border rounded py-2 text-xs hover:bg-orange-100 hover:font-medium hover:text-orange-500 " +
            (activeBanking
              ? "border-orange-400 bg-orange-500 text-white font-bold"
              : "border-gray-200 text-gray-500")
          }
          onClick={() => {
            setActiveBanking(!activeBanking);
          }}
        >
          Thanh toán trước
        </button>
      </div>
{/* flex flex-wrap items-center gap-4 activeBanking ? "block" : "hidden" */}
          {/* Payment Methods Row */}
      <div className= {"flex gap-5 justify-center mb-4 " + (activeBanking ? "" : "hidden")}>
        <PrePay bg=" bg-pink-100" image="/pictures/momo.svg"/>
        <PrePay bg=" bg-green-100" image="/pictures/money.svg"/>
        <PrePay bg=" bg-blue-100" image="/pictures/banking.svg"/>
        <PrePay bg=" bg-white" image="/pictures/vnpay.svg"/>
      </div>
    
    </>
  );
}

export default HowToPay;
