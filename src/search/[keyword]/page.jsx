// const Page = () => {
//   return (
//     <>
//       <section></section>
//     </>
//   );
// };

// export default Page;
import { combineReducers } from 'redux';
import dataReducer from './reducer';
// actions.js
export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

// reducer.js
const initialState = {
  data: [], // Data yang ingin Anda cari
  searchTerm: '', // Pencarian
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;


// rootReducer.js


const rootReducer = combineReducers({
  data: dataReducer,
  // tambahkan reducer lain jika ada
});

export default rootReducer;
