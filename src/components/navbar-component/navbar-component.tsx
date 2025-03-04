'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";


const NavbarComponent = () => {
    const pathName = usePathname()
    const [isCartOpen, setIsCartOpen] = useState(false)

    const handleSignIn = () => {
        alert('sign in')
    }

    return (
        <nav className={'container mx-auto flex justify-between h-[108px] items-center'}>
            <div className={'flex items-center gap-1'}>
                <span className={'text-2xl font-semibold leading-8'}>Let's Food</span>
                <Image
                    src={'/icons/logo.png'}
                    alt={'logo'} width={47}
                    height={47}
                />
            </div>
            <div>
                <ul className={'flex items-center justify-between gap-4'}>
                    <li>
                        <Link
                            className={`font-medium text-[22px] ${pathName === '/' ? 'text-[#1D1D1D]' : 'text-[#1D1D1DB2]'} leading-7`}
                            href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link
                            className={`font-medium text-[22px] ${pathName === '/menu' ? 'text-[#1D1D1D]' : 'text-[#1D1D1DB2]'} leading-7`}
                            href={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link
                            className={`font-medium text-[22px] ${pathName === '/how-it-works' ? 'text-[#1D1D1D]' : 'text-[#1D1D1DB2]'} leading-7`}
                            href={'/how-it-works'}>How it works</Link>
                    </li>
                    <li>
                        <Link
                            className={`font-medium text-[22px] ${pathName === '/about' ? 'text-[#1D1D1D]' : 'text-[#1D1D1DB2]'} leading-7`}
                            href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link
                            className={`font-medium text-[22px] ${pathName === '/contact' ? 'text-[#1D1D1D]' : 'text-[#1D1D1DB2]'} leading-7`}
                            href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={'flex items-center gap-7'}>
                <Image src={'/icons/search.svg'} alt={'search'} width={24} height={24} className={'cursor-pointer'}/>
                <div className="relative">
                    <Image 
                        src={'/icons/cart.svg'} 
                        alt={'cart'} 
                        width={24} 
                        height={24} 
                        className={'cursor-pointer'} 
                        onClick={() => setIsCartOpen(true)}
                    />
                    {isCartOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Shopping Cart</h3>
                                <button 
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="max-h-96 overflow-auto">
                                {/* Cart items would go here */}
                                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                            </div>
                            <div className="mt-4 pt-4 border-t">
                                <Button className="w-full">Checkout</Button>
                            </div>
                        </div>
                    )}
                </div>
                <Button onClick={handleSignIn} className={"gap-4"}> <Image src={'/icons/exit.svg'} alt={'exit'} width={15} height={17} className={'cursor-pointer'}/> <span>Sign in</span></Button>
            </div>
        </nav>
    );
};

export default NavbarComponent;