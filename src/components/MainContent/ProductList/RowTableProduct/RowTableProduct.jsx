import React from "react";
import { useState } from "react";
function RowTableProduct({ infor, kho, calculateTotal }) {
  const [number, setNumber] = useState(0);
  // console.log(infor);
  // console.log(kho);
  // console.log(number);
  function updateNumber(e) {
    if (e.target.value >= 0) {
      calculateTotal(e.target.value * infor.gia);
      setNumber(parseInt(e.target.value));
    }
  }
  let totalCost = number * infor.gia;

  return (
    <>
      <tr class="group hover:bg-gray-50">
        {/* Màu sắc */}
        <td class="py-2 text-left">
          <div class="w-full border rounded px-2 py-1" onchange="updateTotal()">
            {infor.mau}
          </div>
        </td>

        {/* Số lượng */}
        <td class="py-2">
          <input
            type="number"
            value={number}
            class="w-16 border rounded px-2 py-1 text-center"
            onChange={(e) => {
              updateNumber(e);
            }}
          />
        </td>

        {/* Khổ vải */}
        <td class="py-2">
          <div
            class="w-20 border rounded px-2 py-1 text-center"
            onchange="updateTotal()"
          >
            {kho}
          </div>
        </td>

        {/* Đơn giá */}
        <td class="py-2">
          <div
            class="w-24 border rounded px-2 py-1 text-center"
            onchange="updateTotal()"
          >
            {infor.gia}
          </div>
        </td>

        <td class="py-2 font-semibold subtotal">{totalCost}</td>
      </tr>
    </>
  );
}

export default RowTableProduct;
