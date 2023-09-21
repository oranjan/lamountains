import Corousal from "./Corousal"


const History = () => {
  return (
    <section  id="#history" className ={`bg-history-bg bg-cover h-screen bg-no-repeat saturate-[.8]  opacity-80  ` }>
        <div className="w-8/12 mx-auto flex items-center mt-4 pt-5  gap-3">
        <p className="font-black  text-gray-800 text-8xl"> 01 {" "}</p>
        <span className="font-black text-blue-950 text-4xl "> {" "}HISTORY</span>
        </div>
        <div className="w-6/12 mx-auto  p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
        </div>
        <Corousal/>
    </section>
  )
}

export default History
