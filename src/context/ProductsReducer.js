
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

export const getData = () =>{
	fetch('data/products.json').then(
    function(res){
    console.log (res.json())
  }).then(function(data){
	  
    return(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  ) 
}



 
const ProductsReducer = (state, action) => {
	
	let sortedArr;
	let q;
	let c;
	let t;
	
	switch (action.type) {
		case "SET_GAMES":
			return {
                ...state,
				games : [...action.payload],
            }
        case "SORT_BY_PRICE":
            sortedArr = action.payload.direction === "asc" ?
			   sortAsc(state.games, 'price') :
			   sortDesc(state.games, 'price');
			console.log(state.count);
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
		case "ADD_ITEM":
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
				state.count ++;
				state.total += action.payload.price;
            } 

            return {
                ...state,
                cart: [...state.cart],
				count: state.count,
				total: state.total
            }
        case "REMOVE_ITEM":
			q = state.cart[state.cart.findIndex(item => item.id === action.payload.id)].quantity;
			c = state.count - q;
			t = state.total - q * state.cart[state.cart.findIndex(item => item.id === action.payload.id)].price;
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload.id)],
				count: c,
				total: t
            }
        case "INCREASE":
            
			q = JSON.parse(JSON.stringify(state.cart));
			q[state.cart.findIndex(item => item.id === action.payload.id)].quantity++;
			c = state.count + 1;
			t = state.total + state.cart[state.cart.findIndex(item => item.id === action.payload.id)].price;
            return {
                ...state,
				cart: [...q],
				count: c,
				total: t
            }
        case "DECREASE":
		
			q = JSON.parse(JSON.stringify(state.cart));
			q[state.cart.findIndex(item => item.id === action.payload.id)].quantity--;
			c = state.count - 1;
			t = state.total - state.cart[state.cart.findIndex(item => item.id === action.payload.id)].price;
            return {
                ...state,
                cart: [...q],
				count: c,
				total: t
            }
        default:
            return state
	 }
	
	
	
}

export default ProductsReducer