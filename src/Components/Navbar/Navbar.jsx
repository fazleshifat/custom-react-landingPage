import React, { useState } from 'react';
import Link from './Link';
import { AlignLeft, X } from 'lucide-react';


const navItems = [
    {
        id: 1,
        name: 'Home',
        tag: 'a',
        path: '/home'
    },
    {
        id: 2,
        name: 'About',
        tag: 'a',
        path: '/about'
    },
    {
        id: 3,
        name: 'Services',
        tag: 'a',
        path: '/services'
    },
    {
        id: 4,
        name: 'Portfolio',
        tag: 'a',
        path: '/portfolio'
    },
    {
        id: 5,
        name: 'Contact',
        tag: 'a',
        path: '/contact'
    }
];


const Navbar = () => {

    const [menuOpen, setMenuOPen] = useState(false);
    const links = navItems.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <>
            <nav className='flex justify-between items-center m-4 lg:m-8'>
                <span className=' flex gap-1 items-center text-fuchsia-700' onClick={() => setMenuOPen(!menuOpen)}>
                    {
                        menuOpen ?
                            <X className='md:hidden btn btn-ghost w-14 hover:bg-fuchsia-600 hover:text-black'></X> :
                            <AlignLeft className='md:hidden btn btn-ghost w-14 hover:bg-fuchsia-600 hover:text-black'></AlignLeft>


                    }
                    <ul className={`md:hidden absolute duration-1000 p-2 rounded-2xl
                        ${menuOpen ? 'top-16' : '-top-40'}
                        bg-fuchsia-400 z-10 text-black `}>
                        {links}
                    </ul>
                   

                    <h3 className='text-xl text-fuchsia-600 font-extrabold'>FintessHUB</h3>

                </span>

                <ul className='md:flex hidden justify-center gap-5 text-blue-200 lg:space-x-5'>
                    {
                        links
                    }
                </ul>

                <button className='btn text-cyan-500 hover:text-black hover:bg-fuchsia-500 border-fuchsia-500'>Sign In</button>
                {/* <ul className='flex justify-center'>
                {
                    navItems.map(route => <li className='mx-3'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            </nav>
        </>
    );
};

export default Navbar;