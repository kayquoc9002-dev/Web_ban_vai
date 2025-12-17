import React from "react";
import { X } from "lucide-react";
import RowTableProduct from "../RowTableProduct/RowTableProduct";
import { useState } from "react";
function TableProduct({ selected, toggleCart, i, data}) {
  const [total, setTotal] = useState(0);
  // console.log(data[i]);


  function calculateTotal(cost){
    setTotal(total + cost);
  }
  return (
    <>
      <div
        // className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
        //   ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        className={`fixed h-full w-full inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
          selected
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div
          className={`bg-white w-full max-w-[60vw] rounded-xl shadow-xl transform transition-transform duration-300 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    h-[60vh] flex flex-col ${selected ? "scale-100" : "scale-90"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div
            className={`flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10 ${
              selected ? "scale-100" : "scale-90"
            }`}
          >
            <h2
              id="cart-drawer-title"
              className="text-2xl font-semibold text-gray-800"
            >
              Giỏ hàng
            </h2>
            <button
              onClick={() => {
                toggleCart();
              }}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
              aria-label="Close shopping cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* <TableProduct detail={data} index={i} />  */}

          {/* Danh sách sản phẩm */}
          <div className="bg-gray-50 h-full flex flex-col items-center p-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 w-full max-w-3xl h-[90%] overflow-y-scroll">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-40 h-40 flex-shrink-0 fixed ">
                  {/*
              <!-- Product Image --> */}
                  <img
                    src={data[i].hinhAnh}
                    alt=""
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  {/*
              <!-- Details --> */}
                  <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-4">
                    {" "}
                    <span className="text-blue-600">{/* Giá trị */}</span>{" "}
                  </div>
                </div>

                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                    <thead class="bg-gray-100 text-gray-700 font-semibold">
                      <tr>
                        <th class="px-4 py-2">Màu sắc</th>
                        <th class="px-4 py-2 text-center">Số lượng</th>
                        <th class="px-4 py-2 text-center">Khổ vải</th>
                        <th class="px-4 py-2 text-center">Đơn giá</th>
                        <th class="px-4 py-2 text-center">Thành tiền</th>
                      </tr>
                    </thead>

                    <tbody id="tableBody" class="ddivide-y divide-gray-200">
                      {data[i].khoVai.map((item) =>
                        item.bienThe.map((detail) => (
                          <RowTableProduct infor={detail} kho={item.kho} calculateTotal={calculateTotal}/>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          {/* Cart Summary & Checkout */}
          {/* sticky */}
          <div className="p-4 border-t border-gray-200  bottom-0 bg-white shadow-up-md">
            <div className="flex justify-between items-center mb-4 text-lg font-semibold text-gray-800">
              <span>Total:</span>
              <span>{total}</span>
            </div>
            <div className="flex flex-col items-end">
              <button className="px-4 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableProduct;
