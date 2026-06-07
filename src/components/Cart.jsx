import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { Trash2 } from "lucide-react";

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
            {cartItems.length?(
            cartItems.map(product=>(
                <div key={product.id}
                className="
                    flex flex-row
                    p-3
                    justify-between
                    items-center
                    border
                    rounded-lg
                    w-full
                "
                    >
                    <div>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    
                    <button 
                        className="
                        text-red-600
                         rounded-lg 
                         h-10
                         cursor-pointer"
                        onClick={()=>
                            dispatch(removeFromCart(product.id))
                        }
                        >
                        <Trash2/>
                    </button>
                </div>
            ))
        ):(
            <div className="text-center">
                <h2 className="text-xl">Your cart is empty.</h2>

                <p className="text-sm text-gray-500">Add an item to view cart.</p>
            </div>
        )}
        </div>
    );
}