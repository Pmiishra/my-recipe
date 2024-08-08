import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center my-extra-wide min-h-screen">
            <h1 className="text-bold md:text-6xl text-xl my-less-wide">
                Failed to load ......
            </h1>
            <div className="bg-[#d7d9ce] inline px-5 py-3 rounded-3xl text-bold">
                <Link href={'/'} className=" text-xl ">Go Home</Link>
            </div>
        </div>
    );
}