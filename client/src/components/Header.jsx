import { useState, useEffect } from "react";
import InitialNavBar from "./InitialNavBar";
import ScrolledNavBar from "./ScrolledNavBar";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    
    }, []);

    return (
        (isScrolled ? <ScrolledNavBar /> : <InitialNavBar />)
    );
}; 