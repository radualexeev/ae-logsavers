// import videoBackground from "../assets/back.webm"

export default function VideoComponent({children}) {
  return (
    <div className="w-full h-screen border-2 border-red-600 relative overflow-hidden bg-fuchsia-500">
        {/* <video className="w-full h-full object-cover absolute top-0 z-0" autoPlay loop src={videoBackground}></video> */}
        {children}
    </div>
  );
};