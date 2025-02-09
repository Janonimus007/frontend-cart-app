import { productos } from "../data/product"

export const getProduct = ()=>{
    return productos
}

export const calculateTotal = (items )=> {
    return items.reduce((accumulator,item)=>accumulator+item.product.price * item.quantity,0)
}