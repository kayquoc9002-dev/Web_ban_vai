import Product from "./Product/Product";
import { useEffect, useState } from "react";

function ProductList() {

  const [data, setData] = useState([]);
   useEffect(() => {
    async function fetchApi() {
      const res = await fetch("http://localhost:3000/vaiLua");
      const json = await res.json();
      setData(json.vailua);
    }
    fetchApi();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.forEach((item) => {
          <Product image={item.hinhAnh} title={item.ten} code={item.maSanPham} price={item.khoVai[0].bienThe[0].gia}/>
        })}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </>
  );
}
export default ProductList;
