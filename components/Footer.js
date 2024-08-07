import Link from 'next/link';
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });

export default function Navbar() {
    return (


        <nav className="flex  justify-center md:mt-1 md:px-10 px-5 md:py-5 py-3 bg-[#100f10] md:rounded-xl text-white  shadow-md">
            
            <div className={audiowide.className}>
                <ul className='flex md:justify-evenly md:py-1 md:font-bold md:gap-10 gap-2 md:text-base text-xs  '>
                    <Link href={'/'}><li className='uppercase hover:text-[#d7d9ce] transition duration-500 ease-in-out transform-all'>home</li></Link>
                    <Link href={'/'}><li className='uppercase hover:text-[#d7d9ce] transition duration-500 ease-in-out transform-all'>about</li></Link>
                    <Link href={'/recipe'}><li className='uppercase hover:text-[#d7d9ce] transition duration-500 ease-in-out transform-all'>recipe</li></Link>
                </ul>
            </div>
            
        </nav>
    );
};


