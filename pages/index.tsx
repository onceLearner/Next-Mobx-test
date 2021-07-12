import React from "react"

import Header from "../components/Header"
import Card from "../components/Card"
import { Brief } from "../interfaces"
import { useObserver } from "mobx-react-lite"
import { BriefsStore } from "../stores/briefsStore"
import { useRootStore } from "../stores/RootStateContext"

let my_random_brief: Brief =
{
  id: new Date().getTime(),
  city: "city",
  country_code: "A",
  start_date: new Date("12/01/2022"),
  min_images: 21,
  max_images: 50,
  price: 2500,
  min_time: 2,
  max_time: 5,
}



export default function Home() {


  const { briefsStore } = useRootStore()

  return useObserver(() => (

    <div className="flex flex-col h-screen" >
      <Header />

      <main className="flex flex-col items-center flex-auto p-8 mt-4">

        <div className="Hero flex flex-col  w-full items-center space-y-2">
          <h2 className="text-4xl  font-medium text-gray-800"> Your Brief Dashboard</h2>
          <p className="text-gray-700  font-medium text-sm p-4"> On this page you can find briefs you have started or published on Cherrydeck</p>


          <div className="flex  space-x-4">
            <button

              onClick={() => briefsStore.addBrief(my_random_brief)}
              className="p-1 px-6 border hover:bg-pink-100 border-red-500 text-red-600 rounded-full">
              create new brief
            </button>

            <button onClick={() => briefsStore.resetBriefs()}
              className="p-1 px-6 borderbg-pink-500 bg-red-500 text-red-50 hover:opacity-50 rounded-full">
              Load/ Reset Briefs
            </button>
          </div>


        </div>

        <div className=" Cards grid lg:grid-cols-2 grid-cols-1 p-10 gap-16">

          {
            briefsStore.briefs.map(item => (
              <Card data={item} />
            ))
          }

        </div>

      </main>

      <footer className="border  h-10" >

        <p className="text-gray-400 text-center text-sm">OnceLearner</p>

      </footer>
    </div>
  ))

}
