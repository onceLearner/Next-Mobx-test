import React from 'react'
import Image from "next/image"
import { CameraIcon, CloseIcon, DateIcon, LocationIcon, MoneyIcon, VideoIcon } from './icons/main'
import { Brief } from '../interfaces'

type Props = {
    data: Brief
}


const Card = ({ data }: Props) => {
    return (
        <div key={data.id} className="flex flex-col i w-96 border shadow-lg ">
            <div className="Img relative h-60">
                <Image src="/picture2.jpg" layout="fill" objectFit="cover" />

                <div className="absolute top-3 right-3">
                    <CloseIcon />

                </div>

            </div>

            <div className="Info flex flex-col items-center p-8 space-y-3">

                <div className="Info1 flex items-center justify-between  w-full">
                    <div className="Location flex items-center space-x-2">
                        <LocationIcon />
                        <p className="text-xl font-medium">{data.city},{data.country_code}</p>

                    </div>

                    <div className="flex items-center space-x-6">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <p className="text-yellow-500">DRAFT</p>

                    </div>

                </div>

                <div className="Info-Section2 flex space-x-9 w-full pt-4">

                    <div className="Location flex items-center space-x-2">
                        <DateIcon />
                        <p className="">{data.start_date.toLocaleDateString()}</p>

                    </div>

                    <div className="Location flex items-center space-x-2">
                        <MoneyIcon />
                        <p className="">up to ${data.price}</p>

                    </div>

                </div>

                <div className="Info-Section3 flex space-x-9 w-full pb-6">
                    <div className="Location flex items-center space-x-2">
                        <CameraIcon />
                        <p className="">{data.min_images}-{data.max_images} images</p>

                    </div>

                    <div className="Location flex items-center space-x-2">
                        <VideoIcon />
                        <p className="">{data.min_time}-{data.max_time} minutes</p>

                    </div>
                </div>

                <button className="p-1 px-6   border w-40 hover:bg-pink-100 border-red-500 text-red-600 rounded-full uppercase">
                    edit brief
                </button>
            </div>

        </div>
    )
}

export default Card
