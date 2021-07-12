

import React from 'react'
import Image from "next/image"
import Avatar from "../public/avatar.jpg"
import { MenuIcon } from './icons/main'

const Header = () => {
    return (
        <div className=" flex   justify-between p-3 px-6 shadow-lg">
            <div className="TopLeft flex items-center space-x-9 text-gray-600">
                <span> Blog </span>
                <span> Services </span>
                <span> Events </span>
            </div>

            <div className="TopCenter">

                <h1 className="text-3xl font-extrabold uppercase text-gray-900"> cherrydeck</h1>
            </div>

            <div className="TopRight flex items-center space-x-6">
                <div className="AVATAR relative w-7 h-7 bg-purple-600 rounded-full">
                    <Image src={Avatar} objectFit="cover" layout="fill" className="rounded-full" />
                </div>

                <div className="flex items-center space-x-3 border border-pink-500 rounded-full px-2">

                    <MenuIcon />
                    <p className=" text-pink-600">MENU</p>

                </div>

            </div>
        </div>
    )
}

export default Header
