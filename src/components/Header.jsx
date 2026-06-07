import {Link} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {ShoppingCart, Sun, Moon} from 'lucide-react';
import { toggleTheme } from "../features/theme/themeSlice";

function Header(){
    const cartItems = useSelector(
        state => state.cart.cartItems
    );
    const dispatch = useDispatch();

    const darkMode = useSelector(
        state => state.theme.darkMode
    );
    
return(
    <nav className="flex justify-between p-6 sticky top-0 z-50 hover:shadow-2xl bg-black/10 backdrop-blur-2xl">
        <div className="flex">
            <Link to="/">Shop Zone</Link>
        </div>
        <div className="flex gap-8 items-center justify-between">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/shop">Shop</Link>
            <Link className="flex flex-row" to="/cart"><ShoppingCart/>: {cartItems.length}</Link>
            <Link className="hover:underline" to="/contact">Contact</Link>
            <button
                onClick={() =>
                    dispatch(toggleTheme())
                }

                className="
                    cursor-pointer
                "
            >
                {darkMode ? <Sun/> : <Moon/>}
            </button>
        </div>
    </nav>
)
}
export default Header;