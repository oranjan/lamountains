import Navbar from "./Navbar"

const Hero = () => {
  const location= "LOS ANGELES";
  const terrain="MOUNTAINS";
  return (
    <>
    <header className ={`bg-hero-mountains bg-cover h-screen bg-no-repeat saturate-[.8]  opacity-80`}> 
    <Navbar color={"text-white"}/>

    <div className=" w-5/12 mx-auto   mt-12   font-black flex flex-col   text-7xl">
    <h1 className=" pb-4 text text-gray-900">{location}</h1>
    <h1 className="text-blue-900">{terrain}</h1>
    </div>
    </header>
    <Navbar   color={"text-gray-700"} location={location} terrain={terrain} />
    </>        
  )
}

export default Hero
