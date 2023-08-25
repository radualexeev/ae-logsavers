import imgTruck from "../assets/truck.png";
// import imgVessel from "../assets/vessel.png";
import imgAvia from "../assets/avia.png";
import imgContainer from "../assets/container.png";
import imgTrain from "../assets/train.png";
import imgBigVessel from "../assets/big-vessel.png";


export default function SecondPage() {
    return (
        <div className="w-screen h-screen bg-slate-500 overflow-hidden border-2 border-green-600 flex flex-col justify-center items-center">
            <h1 className="uppercase text-white font-thin tracking-wider leading-10 text-6xl my-8">Our services</h1>
            <div className="flex w-3/4 h-3/4 border-2 border-fuchsia-800">
                
                <ul className="w-1/3 h-full flex flex-col items-center justify-between">
                    <li className="w-full h-1/3 flex justify-end items-center">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgAvia} alt="png" />
                    </li>
                    <li className="w-full h-1/3 flex justify-center items-center 0">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgContainer} alt="png" />
                    </li>
                    <li className="w-full h-1/3 flex justify-end items-center 0">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgBigVessel} alt="png" />                    
                    </li>
                </ul>
                
                <div className="w-1/3 h-full flex flex-col items-center justify-center">
                    <img className="w-1/2" src={imgTruck} alt="png" />                 
                </div>
                
                <ul className="w-1/3 h-full flex flex-col items-center justify-between">
                    <li className="w-full h-1/3 flex justify-start items-center">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgTruck} alt="png" />
                    </li>
                    <li className="w-full h-1/3 flex justify-center items-center">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgBigVessel} alt="png" />                    
                    </li>
                    <li className="w-full h-1/3 flex justify-start items-center">
                        {/* <span className="w-32 h-32 rounded-full bg-red-600 "></span> */}
                        <img className="w-1/2" src={imgTrain} alt="png" />                    
                    </li>
                </ul>

            </div>
        </div>
    )
}