import { X } from "lucide-react";
import Product from "./Product/Product";
import { useEffect, useState, useRef } from "react";
import TableProduct from "./TableProduct/TableProduct";

function ProductList() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  // const [index, setIndex] = useState(null);
  const indexRef = useRef(0);

  // console.log(indexRef.current);
  let i = indexRef.current - 1;
  // console.log(data[i]);
  // console.log(data[indexRef-1]);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch("http://localhost:3000/vaiLua");
      const json = await res.json();
      setData(json);
    }
    fetchApi();
  }, []);

  function toggleCart(idItem) {
    indexRef.current = idItem;
    setSelected(!selected);
  }

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
            id={item.id}
            toggleCart={toggleCart}
          />
        ))}
      </div>

      {/* Cart Drawer Overlay and Content */}
      {selected && (
        <div
          className={`fixed inset-0 z-40 ${
            selected ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={() => {
            toggleCart();
          }}
        >
          {/* Overlay */}
          <div
            // className={`bg-white w-full max-w-md rounded-xl shadow-xl transform transition-transform duration-300 ${
            //   selected ? "scale-100" : "scale-90"}`} // onClick={(e)=> e.stopPropagation()}
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              selected ? "opacity-50" : "opacity-0"
            }`}
          ></div>

          <TableProduct selected={selected} toggleCart={toggleCart} i={i} data={data}/>
        </div>
      )}
    </>
  );
}
export default ProductList;
