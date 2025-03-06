'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'AddProduct',
            path: '/addProducts'
        },
        {
            title: 'MyProduct',
            path: '/myProducts'
        },
    ]
    return (
        <div>
            <nav className='flex gap-2 text-xl font-bold justify-center bg-cyan-500 p-4'>
            {
                navLinks?.map((navLink)=> <Link className={`${pathName === navLink.path? 'text-purple-500' : ""}`} key={navLink.path} href={navLink.path}>{navLink.title}</Link>)
            }
            </nav>
        </div>
    );
}

export default Navbar;
