import Link from 'next/link'
import React from 'react'

const BotonPanel = () => {
    return (
        <div>
            <Link href={'/dashboard'}>
            <button className="btn text-white hover:text-red-600 ">Panel Administrativo</button>
            </Link>
        </div>
    )
}

export default BotonPanel
