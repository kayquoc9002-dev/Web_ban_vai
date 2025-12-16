import Product from "./Product/Product";
import { useEffect, useState } from "react";

function ProductList() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch("http://localhost:3000/vaiLua");
      const json = await res.json();
      setData(json);
    }
    fetchApi();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item) => (
          // console.log(item);
          <Product
            image={item.hinhAnh}
            title={item.ten}
            key={item.maSanPham}
            price={item.khoVai[0].bienThe[0].gia}
            onClick={() => {
              setSelected(!selected);
            }}
          />
        ))}
        {selected && (
          <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
            {data.map((item) => (
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 w-full max-w-3xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-40 h-40 flex-shrink-0">
                    {/* <!-- Product Image --> */}
                    <img
                      src={item.hinhAnh}
                      alt=""
                      class="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    {/* <!-- Details --> */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        Vải Cotton Poly
                      </h3>
                      <p className="text-sm font-bold text-gray-600">
                        TỔNG CỘNG:
                        <span id="totalPrice" className="italic font-normal">
                          0 Đồng
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm text-center">
                      <thead>
                        <tr class="text-gray-900 font-bold border-b">
                          <th class="pb-2 text-left">Màu sắc</th>
                          <th class="pb-2">Số lượng</th>
                          <th class="pb-2">Khổ vải</th>
                          <th class="pb-2">Đơn giá</th>
                          <th class="pb-2">Thành tiền</th>
                          <th class="pb-2">Ghi chú</th>
                        </tr>
                      </thead>

                      <tbody id="tableBody" class="divide-y divide-gray-100">
                        {item.khoVai.forEach((detail) => (
                          <div>
                            {detail.bienThe.forEach((infor) => (                      
                              <tr class="group hover:bg-gray-50">

                               {/* Màu sắc  */}
                              <td class="py-2 text-left">
                                <div
                                  class="w-full border rounded px-2 py-1"
                                  onchange="updateTotal()"
                                >
                                  {infor.mau}
                                </div>
                              </td>

                              {/* Số lượng */}
                              <td class="py-2">
                                <input type="number" value="0"
                                  class="w-16 border rounded px-2 py-1 text-center"
                                  onchange="updateTotal()" />
                              </td>
                              
                              {/* Khổ vải */}
                              <td class="py-2">
                                <div class="w-20 border rounded px-2 py-1 text-center"
                                  onchange="updateTotal()">
                                    {detail.kho}
                                  </div>
                              </td>

                              {/* Đơn giá */}
                              <td class="py-2">
                                <div class="w-24 border rounded px-2 py-1 text-center"
                                  onchange="updateTotal()">
                                    {infor.gia}
                                  </div>
                              </td>
                              
                              <td class="py-2 font-semibold subtotal">0</td>
                               
                                <td class="py-2 flex justify-center gap-2">
                                  <button class="text-blue-500 border border-blue-500 rounded p-0.5 hover:bg-blue-200">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                  </button>

                                  <button onclick="deleteRow(this)"
                                    class="text-red-500 border border-red-500 rounded p-0.5 hover:bg-red-200">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                               </td>
                            </tr>
                            ))}
                          </div>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ProductList;
