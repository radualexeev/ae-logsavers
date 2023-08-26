import VideoBackground from "./components/VideoBackground";
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-screen h-full flex flex-col items-center justify-center font-montserrat">
      <Header />
      <VideoBackground>
        <FirstPage />
      </VideoBackground>
      <SecondPage />
    </div>
  );
};
