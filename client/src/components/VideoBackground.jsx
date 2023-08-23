import videoBg from "../assets/back.webm"

export default function VideoComponent({children}) {
  return (
    <div className="w-full h-screen border-2 border-red-600 relative overflow-hidden">
        <video className="w-full h-full object-cover absolute top-0 z-0" controls autoPlay loop src={videoBg}></video>
        {children}
    </div>
  );
};