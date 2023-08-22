export default function App() {
  return (
    <div className="bg-blue-950 text-white h-screen w-screen flex flex-col items-center justify-start mt-0">
      {/* ------------------------------------------------ */}

      <div className="border w-full h-32 flex items-center">
        <ul className="w-full flex flex-row justify-between items-center text-sm font-bold uppercase">
          <li className="w-1/3 flex justify-start gap-6 pl-6">
            <a href="#">Services</a>
            <a href="#">Works</a>
            <a href="#">About</a>
          </li>
          <li className="w-1/3 flex justify-center text-3xl">AE LOGSAVERS</li>
          <li className="w-1/3 flex justify-end gap-6 pr-6">
            <a href="#">Team</a>
            <a href="#">Achievements</a>
            <a href="#">Contacts</a>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>

      {/* ------------------------------------------------ */}
      
      <div>
        <h1>a new generation of Logistics Transportation</h1>
        <p>Our experience is hidden under mountains of hard work</p>
        <button>Find Your Quote</button>
      </div>

      {/* ------------------------------------------------ */}


    </div>
  );
};
