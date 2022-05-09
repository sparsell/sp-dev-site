import { useState } from 'react';

export default function Header() {
    const [navOpen, setNavOpen ] = useState("false");

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8"> 
            <a href="/"></a>
        </div>
    )
    
}