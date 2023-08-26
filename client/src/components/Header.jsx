export default function Header() {

    return (
        <div className="fixed top-0 z-20 w-[1891px] h-[91px] bg-green-600 flex items-center">
            <ul className="w-full flex flex-row justify-between items-center text-[14px] antialiased text-white font-semibold uppercase">
                <li className="w-1/3 flex justify-start gap-10">
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Services</a>
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Works</a>
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">About</a>
                </li>
                <li className="w-1/3 cursor-pointer flex justify-center text-3xl hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200">AE LOGSAVERS</li>
                <li className="w-1/3 flex justify-end gap-10 pr-8">
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Team</a>
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Achievements</a>
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Contacts</a>
                    <a className="hover:text-[#8f44ad] transition duration-400 ease-in-out delay-200" href="/">Search</a>
                </li>
            </ul>
        </div>
    );
}; 