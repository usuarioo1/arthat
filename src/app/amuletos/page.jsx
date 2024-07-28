import React from 'react';
import ListaAmuletos from './ListaAmuletos';

const Page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">AMULETOS</h3>
                
                </div>
            </div>
            <ListaAmuletos />
        </div>
    );
};

export default Page;
