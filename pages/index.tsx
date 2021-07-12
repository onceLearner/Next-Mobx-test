import React from "react"

import Header from "../components/Header"
import Card from "../components/Card"
import { CardData } from "../interfaces"

let arrayOfData: Array<CardData> = [
  {
    id: 1,
    city: "London",
    country_code: "UK",
    start_date: new Date("12/01/2022"),
    min_images: 21,
    max_images: 50,
    price: 2500,
    min_time: 2,
    max_time: 5,
  }
]


export default function Home() {
  return (
    <div className="flex flex-col h-screen" >
      <Header />

      <main className="flex flex-col items-center flex-auto p-8 mt-4">

        <div className="Hero flex flex-col  w-full items-center space-y-2">
          <h2 className="text-4xl  font-medium text-gray-800"> Your Brief Dashboard</h2>
          <p className="text-gray-700  font-medium text-sm p-4"> On this page you can find briefs you have started or published on Cherrydeck</p>

          <button className="p-1 px-6 border hover:bg-pink-100 border-red-500 text-red-600 rounded-full">
            create new brief
          </button>

        </div>

        <div className=" Cards grid lg:grid-cols-2 grid-cols-1 p-10 gap-16">

          {
            arrayOfData.map(item => (
              <Card data={item} />
            ))
          }

        </div>

      </main>

      <footer className="border  h-10" >

        <p className="text-gray-400 text-center text-sm">OnceLearner</p>

      </footer>
    </div>
  )
}
