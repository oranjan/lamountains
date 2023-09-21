import Navbar from "./Navbar";

const Climb = () => {
  return (
    <section id="#climb">
      <div className=" w-8/12 mx-auto">
        <div className="flex gap-4 items-center w">
          <p className="font-black  text-gray-800 text-8xl"> 02 </p>
          <span className="font-black text-blue-950 text-4xl "> CLIMB</span>
          <div className=" p-4">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue
          </div>
        </div>
      </div>
      <div className="bg-slate-700    flex  font-bold text-slate-400 p-1">
        <div className="w-8/12 mx-auto flex gap-4 py-2">
          <a className="hover:bg-white" href="">
            MOUNTAIN 1
          </a>
          <a  className="hover:bg-white" href="">MOUNTAIN 2</a>
        </div>
      </div>

        <div className={`bg-climb-img bg-cover h-screen bg-no-repeat saturate-[.8]  opacity-80 flex flex-col  items-center justify-center ` }>
            <div className="schedule opacity-80 bg-slate-300 w-3/12 pl-4 py-4 h-2/6 rounded-sm  text-slate-700 ">
                <h1 className="text-4xl font-black p-2">SCHEDULE</h1>

                <div className="flex gap-3">
                <p>25 Nov 2016</p>
                <p>Vestibulum viverra</p>
                </div>

                <div className="flex gap-3">
                <p>28 Nov 2016</p>
                <p>Vestibulum viverra</p>
                </div>

                <div className="flex gap-3">
                <p>1 DEC  2016</p>
                <p>Vestibulum viverra</p>
                </div>
            </div>
        </div>
        <Navbar className="bg-slate-900"  location={"LOS ANGELES MOUNTAINS"} terrain={"COPYRIGHT 2023. ALL RIGHTS RESERVED."}/>
    </section>
  );
};

export default Climb;
