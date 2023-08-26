export default function InitialNavBar() {
    return (
        <div className="fixed top-0 z-20 w-[1891px] h-[91px] bg-blue-400 flex items-center">
            <ul className="w-full flex flex-row justify-between items-center text-[14px] antialiased text-white font-semibold uppercase">
                <li className="w-1/3 flex justify-start gap-10 pl-8">
                    {["Services", "Works", "About"].map((elem) => (
                        <a href="/" className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200">{elem}</a>
                    ))}
                </li>
                <li className="w-1/3 cursor-pointer flex justify-center text-4xl">AE LOGSAVERS</li>
                <li>                  
                </li>
                <li className="w-1/3 flex justify-end gap-10 pr-8">
                    {["Team", "Achievements", "Contacts"].map((elem) => (
                        <a href="/" className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200">{elem}</a>
                    ))}            
                    <svg className="cursor-pointer" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="transition duration-400 ease-in-out delay-200 hover:stroke-[#8f44ad]" d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>          
                </li>                                 
            </ul>
        </div>
    );
}