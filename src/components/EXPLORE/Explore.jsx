import React from 'react'
import Template from '../Common/Template'

const Explore = () => {
  const data = [{ path: "/explore/carousel", name: "Carousel",url:"/images/carousel.jpg" }, { path: "/explore/rtk", name: "RTK",url:"/images/rtk.jpg" }]
  return (
   <Template data={data} Category={"TIME TO EXPLORE"} about={"Explore Dashboard: Dive into React concepts hands-on! Experiment with components, state, and more. Learn, create, and bring ideas to life – all in one place!"}/>
  )
}

export default Explore