import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu,setToggleMenu]=useState(false);
    return(
        <header className="flex justify-between px-4 py-2 bg-primary">
            <a href="#" className="text-customBlue font-made-voyager px-2 py-2 text-3xl">iFOLIO</a>
            <nav className="hidden md:block">
            <ul className="flex px-8 py-2 hero-font text-white text-xl space-x-10">
                <li><a href='#Home'>Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>
            
            {toggleMenu && <nav className="block md:hidden">
            <ul className="flex flex-col text-white mobile-nav">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>}
            <button onClick={()=> setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
    )
}