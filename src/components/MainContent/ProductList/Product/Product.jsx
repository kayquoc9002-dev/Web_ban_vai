
// const fetchApi = async (url) => {
//   let result = await fetch(url);
//   return result.json
// }

function Product({code, image, title, price, id, toggleCart}) {
  
  return (
    <>
      <div className="bg-white p-2 rounded shadow hover:shadow-lg transition" onClick={() => toggleCart(id)}>
        <img
          src={image}
          className="w-full h-32 object-cover rounded mb-2"
        />
        <h4 className="text-xs text-gray-600 mb-1 line-clamp-2">
          {title}
        </h4>
        <div className="flex justify-between items-end">
          <span className="text-[10px] text-gray-400">{code}</span>
          <span className="text-xs font-bold">{price} VND</span>
        </div>
      </div>
    </>
  );
}
export default Product;
