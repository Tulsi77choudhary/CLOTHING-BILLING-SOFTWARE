import React from 'react'

const NavItems = [
    { name: 'Home', to: 'home' },
    { name: 'Features', to: 'features' },
    { name: 'Pricing', to: 'pricing' },
    {name: 'About Us', to: 'about us' },
    { name: 'Contact', to: 'contact' },
    { name: 'Request Demo', to: 'request demo' },
]

export const Navigation = () => {


    return (
        <div className='bg-white shadow-md w-full py-4 '> 
            <div className='max-w-7xl  mx-auto px-4 py-3 flex justify-between items-center'>
                <ul>
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.to}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigation