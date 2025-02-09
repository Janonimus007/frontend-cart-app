export const itemsReducer =(state=[],action)=> {
    switch (action.type) {
        case 'AddProductCart':
            return [...state,
                {
                    product:action.payload,
                    quantity:1,
                }]
        case 'UpdateQuantityProductCart':
            return [
                ...state.filter((i) => i.product.id !== action.payload.product.id), 
                {
                    product: action.payload.product, 
                    quantity: action.payload.hasItem.quantity + 1,
                }
            ];
        
        case 'DeleteProductCart':
            return [...state.filter((i) => (i).product.id != action.payload )]           
        default:
            return state;
    }

}