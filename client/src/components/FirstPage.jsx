export default function FirstPage() {
    return (
    <div className=" text-white flex flex-col items-center justify-start relative w-full h-screen z-10">
      {/* ------------------------------------------------ */}
      <div className="w-full h-24 flex items-center ">
        <ul className="w-full flex flex-row justify-between items-center text-sm font-bold tracking-widest uppercase">
          <li className="w-1/3 flex justify-start gap-10 pl-8">
            <a className="" href="/">Services</a>
            <a href="/">Works</a>
            <a href="/">About</a>
          </li>
          <li className="w-1/3 flex justify-center text-3xl">AE LOGSAVERS</li>
          <li className="w-1/3 flex justify-end gap-10 pr-8">
            <a href="/">Team</a>
            <a href="/">Achievements</a>
            <a href="/">Contacts</a>
            <a href="/">Search</a>
          </li>
        </ul>
      </div>

      {/* ------------------------------------------------ */}
      
      <div className="w-full h-5/6 flex flex-col items-center justify-center ">
        <h1 className="w-3/5 p-10 uppercase text-center leading-snug text-7xl font-thin">a new generation of Logistics Transportation</h1>
        <p className="w-3/5 p-5 text-center text-xl font-thin">Our experience is hidden under mountains of hard work</p>
        <button className="my-16 border-solid border-2 uppercase tracking-wider rounded-2xl py-2 px-5">Find Your Quote</button>
      </div>

      {/* ------------------------------------------------ */}

      <div className="flex justify-center items-center w-full h-32">
        <svg className="cursor" width="100px" height="100px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g id="layer1">
            <path d="M 4 6.2910156 L 3.2910156 7 L 3.6464844 7.3535156 L 10 13.708984 L 16.353516 7.3535156 L 16.708984 7 L 16 6.2910156 L 15.646484 6.6464844 L 10 12.291016 L 4.3535156 6.6464844 L 4 6.2910156 z " fill="#ffffff"/>
          </g>
        </svg>
      </div>
      {/* ------------------------------------------------ */}

    </div>
    )
}