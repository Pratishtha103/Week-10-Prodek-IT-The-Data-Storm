import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function Cart(){
    const cartItems = useSelector(
        state => state.cart.cartItems
    )
    const dispatch = useDispatch();
    return(
        <div className=" p-6 
                flex 
                flex-col 
                items-center 
                gap-2">
            {
            cartItems.map(product=>(
                <div key={product.id}
                className="
                    flex flex-row
                    p-3
                    w-200
                    justify-between
                    bg-[#222]
                    rounded-lg
                "
                    >
                    <div>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    
                    <button 
                        className="
                         bg-red-600
                         text-white 
                         hover:bg-[#333] 
                         hover:text-red-600
                         border-2 
                         rounded-lg 
                         h-10 w-40 
                         p-2 
                         cursor-pointer"
                        onClick={()=>
                            dispatch(removeFromCart(product.id))
                        }
                        >
                        Remove
                    </button>
                </div>
            ))
        }
        </div>
    );
}