import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-44 bg-orange-600'>
                <div className='flex gap-3 text-white justify-center pt-20'>
                    <Link href='/'>Home</Link>
                    <Link href='/myProduct'>MyProduct</Link>
                </div>
        </div>
    );
}

export default Footer;
