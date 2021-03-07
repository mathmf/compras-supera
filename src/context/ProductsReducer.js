
function sortAsc(arr, field) {
   return arr.sort(function (a, b) {
       if (a[field] > b[field]) {
           return 1;
       }
       if (b[field]> a[field]) {
           return -1;
       }
       return 0;
   })
}

function sortDesc(arr, field) {
   return arr.sort(function (a, b) {
       if (a[field] > b[field]) {
           return -1;
       }
       if (b[field]> a[field]) {
           return 1;
       }
       return 0;
   })
}

const ProductsReducer = (state, action) => {
	
	let sortedArr
	
	switch (action.type) {
        case "SORT_BY_PRICE":
            sortedArr = action.payload.direction === "asc" ?
			   sortAsc(state.games, 'price') :
			   sortDesc(state.games, 'price');
            return {
                ...state,
				games : sortedArr,
            }
		case "SORT_BY_SCORE":
            sortedArr = action.payload.direction === "asc" ?
			   sortAsc(state.games, 'score') :
			   sortDesc(state.games, 'score');
            return {
                ...state,
				games : sortedArr,
            }	
		case "SORT_BY_NAME":
            sortedArr = action.payload.direction === "asc" ?
			   sortAsc(state.games, 'name') :
			   sortDesc(state.games, 'name');
            return {
                ...state,
				games : sortedArr,
            }
        default:
            return state
	 }
	
	
	
}

export default ProductsReducer