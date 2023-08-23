import VideoBackground from "./components/VideoBackground";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/SecondPage";

export default function App() {
  return (
    <div className="w-screen h-full flex flex-col items-center justify-center overflow-hidden">
      <VideoBackground>
        <FirstPage />
      </VideoBackground>
      <SecondPage />
    </div>
  );
};
