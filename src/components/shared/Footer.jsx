import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-44 bg-orange-600'>
                <div className='flex gap-3 text-white justify-center pt-20'>
                    <Link className='px-4 py-2 rounded-lg bg-red-900 hover:rounded-full' href='/'>Home</Link>
                    <Link className='px-4 py-2 rounded-lg bg-red-900 hover:rounded-full' href='/myProduct'>MyProduct</Link>
                </div>
        </div>
    );
}

export default Footer;
