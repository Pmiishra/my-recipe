import Image from "next/image";
import Link from "next/link";
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });


export default function Home() {
  return (
    <div className="h-full">
      <div className={audiowide.className}>
        <h1 className="text-center uppercase md:text-6xl text-3xl mt-extra-wide">namaste <span className="text-[#d7d9ce]">recipes</span> </h1>
      </div>
      <div className={audiowide.className}>
        <h2 className="text-center uppercase md:text-2xl text-lg mt-less-wide">we know that you are hungry</h2>

      </div>
      <div className=" flex mt-less-wide justify-center mb-extra-wide ">
        <Link href={'/recipe'} className="uppercase bg-[#100f10] text-white rounded-3xl px-5 py-2">wanna eat</Link>
      </div>
    </div>
  );
}
