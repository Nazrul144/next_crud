import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <div className='lg:w-4xl mx-auto border-[1px] border-gray rounded-lg lg:px-24 lg:py-12 mt-20 mb-14'>
                <h1 className='text-center text-2xl font-bold mb-4'>Add Products</h1>
                <form className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter product name' /> 
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter category name' /> 
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter price' /> 
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter guarantee' /> 
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter features' /> 
                    <input className='px-4 py-2 rounded-lg border-[1px] border-red-800' type="text" placeholder='Enter rating' /> 
                    <input className='px-4 py-2 bg-cyan-400 rounded-lg w-full lg:ml-46 cursor-pointer hover:rounded-full hover:bg-purple-600 transition-colors duration-300 ease-in-out hover:text-white' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
}

export default AddProducts;
