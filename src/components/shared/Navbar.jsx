import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'AddProduct',
            path: '/addProduct'
        },
        {
            title: 'MyProduct',
            path: '/myProduct'
        },
    ]
    return (
        <div>
            <nav className='flex gap-2 text-xl font-bold justify-center bg-cyan-500 p-4'>
            {
                navLinks?.map((navLink)=> <Link key={navLink.path} href={navLink.path}>{navLink.title}</Link>)
            }
            </nav>
        </div>
    );
}

export default Navbar;
