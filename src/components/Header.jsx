import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';

function Header(){
    const cartItems = useSelector(
        state => state.cart.cartItems
    );
return(
    <nav className="flex justify-between p-6 sticky top-0 z-50 hover:shadow-2xl bg-black/10 backdrop-blur-2xl">
        <div className="flex">
            <Link to="/">Shop Zone</Link>
        </div>
        <div className="flex gap-8 items-center justify-between">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/shop">Shop</Link>
            <Link to="/cart">Cart: {cartItems.length}</Link>
            <Link className="hover:underline" to="/contact">Contact</Link>
        </div>
    </nav>
)
}
export default Header;