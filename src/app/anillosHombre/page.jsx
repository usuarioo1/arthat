import React from 'react';
import ListaAnillos from './ListaAnillos';

const Page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">ANILLOS</h3>
                
                </div>
            </div>
            <ListaAnillos />
        </div>
    );
};

export default Page;
