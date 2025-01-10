import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthProviderContext);
    // console.log(user);
    const [cart] = useCart();

    const handleLogOut = () => {
        signOutUser()
            .then(() => { })
            .catch(error => console.log(error));
    }

   
const links = <>
  <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ?
                <li className='flex flex-row gap-1 justify-center '>
                    <div> <button onClick={handleLogOut} className="btn btn-ghost -mt-3">LogOut</button></div>
               
                <h3 className='text-white'>{user?.displayName}</h3>
                </li>
             :
                <li><Link to="/login">Login</Link></li>
           
        }
    </>
    return (
        <div>
            <div className="navbar bg-black text-white bg-opacity-50 fixed z-10 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;