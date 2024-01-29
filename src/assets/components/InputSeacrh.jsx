// import { MagnifyingGlass } from "@phosphor-icons/react";

// const InputSeacrh = () => {
//   return (
//     <div className="relative">
//       <input placeholder="cari barang..." className="w-full p-2 rounded" />
//       <button className="absolute top-2 end-2">
//         <MagnifyingGlass size={25} />
//       </button>
//     </div>
//   );
// };

// export default InputSeacrh;
// component.js
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./actions";

const InputSeacrh = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.data.searchTerm);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Logika pencarian data sesuai dengan 'searchTerm'

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
      {/* Render data sesuai dengan logika pencarian */}
    </div>
  );
};

export default InputSeacrh;
