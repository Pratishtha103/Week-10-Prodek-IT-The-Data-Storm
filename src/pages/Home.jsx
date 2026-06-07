// import { useSelector, useDispatch } from "react-redux";

// import { addToCart } from "../features/cart/cartSlice";
function Home(){
    // const cart = useSelector(state => state.cart);
    // console.log(cart);

    // const dispatch = useDispatch();
    
    return(
        <div className="overflow-auto">
{/*             
            <button className="cursor-pointer"
                onClick={() =>
                        dispatch(
                        addToCart({
                            id: 1,
                            title: "Test Product",
                        })
                    )
                }
                >
                Test Cart
            </button> */}
            <div className="relative flex flex-col gap-2 justify-center p-10 h-screen bg-[url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwwfDB8fHww)] bg-center bg-cover bg-no-repeat"> 
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-7xl">Welcome to 'The Shop Zone'</h2>
                    <p className="text-2xl">A shopper's new highlight</p>
                </div>
            </div>
        </div>
    )
}
export default Home;