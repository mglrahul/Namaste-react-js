import { useDispatch, useSelector } from "react-redux";
import FoodCardSection from "./FoodCardSection";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="flex">
            <div className="p-1">
                <h1>Cart Page</h1>
                <button  className="p-1 bg-red-100" onClick={()=>{handleEmptyCart()}}>Empty Cart</button>
            </div>
            <div className="flex p-2 m-2">
                {cartItems.map(item => <FoodCardSection {...item}/>)}
            </div>
        </div>
    )
}

export default Cart;