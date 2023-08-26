export default function FirstPage() {
    return (
    <div className=" text-white flex flex-col items-center justify-center relative w-full h-screen z-10">
      <div className="w-full h-5/6 flex flex-col items-center justify-center ">
        <div className="w-1/2 p-10 uppercase text-center leading-snug text-7xl font-thin flex flex-col items-center justify-center ">
          <div className="w-[837px] h-[88px] flex flex-row justify-center items-center gap-4">
              <span className="animate-rollFirst">a</span>

              <span className="animate-rollSecond">n</span>
              <span className="animate-rollFirst">e</span>
              <span className="animate-rollSecond">w</span> 

              <span className="animate-rollFirst">g</span> 
              <span className="animate-rollSecond">e</span> 
              <span className="animate-rollFirst">n</span> 
              <span className="animate-rollSecond">e</span> 
              <span className="animate-rollFirst">r</span> 
              <span className="animate-rollSecond">a</span> 
              <span className="animate-rollFirst">t</span> 
              <span className="animate-rollSecond">i</span> 
              <span className="animate-rollFirst">o</span> 
              <span className="animate-rollSecond">n</span> 

          </div>
          <div className="w-[837px] h-[88px] flex flex-row justify-center items-center gap-4">

              <span className="animate-rollFirst">o</span>
              <span className="animate-rollFirst">f</span>

              <span className="animate-rollSecond">maa</span>
              <span className="animate-rollFirst">e</span>
              <span className="animate-rollSecond">d</span> 
              <span className="animate-rollSecond">i</span> 
              <span className="animate-rollSecond">a</span> 

              <span className="animate-rollFirst">a</span> 
              <span className="animate-rollSecond">g</span> 
              <span className="animate-rollFirst">e</span> 
              <span className="animate-rollSecond">n</span> 
              <span className="animate-rollFirst">c</span> 
              <span className="animate-rollSecond">y</span> 
          </div>
        </div>
        <p className="w-3/5 p-5 text-center text-xl font-thin">Our experience is hidden under mountains of hard work</p>
        <button className="my-16 border-solid border-2 uppercase tracking-wider rounded-2xl py-2 px-5">Find Your Quote</button>
      </div>

      {/* ------------------------------------------------ */}

      <div className="flex justify-center items-center w-full h-32">
        <svg className="cursor-pointer animate-vectorUp" width="100px" height="100px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g id="layer1">
            <path d="M 4 6.2910156 L 3.2910156 7 L 3.6464844 7.3535156 L 10 13.708984 L 16.353516 7.3535156 L 16.708984 7 L 16 6.2910156 L 15.646484 6.6464844 L 10 12.291016 L 4.3535156 6.6464844 L 4 6.2910156 z " fill="#ffffff"/>
          </g>
        </svg>
      </div>
      {/* ------------------------------------------------ */}

    </div>
    )
}