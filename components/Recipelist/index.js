import { Audiowide } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });

export default function Recipelist({ recipes_list }) {
    return (
        <div>
            <div className={audiowide.className}>
                <h1 className="text-4xl font-bold m-5 tracking-widest text-center">RECIPES</h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-8 md:m-10">
                {recipes_list.map((recipeitems) => (
                    <Card key={recipeitems.id} className="md:mx-0 mx-1 my-5"> 
                        <CardHeader>
                            <Link href={`/recipe/${recipeitems.id}`}>
                                <Image
                                    src={recipeitems.image}
                                    alt="this is image"
                                    width={500}
                                    height={100}
                                    className="transition duration-500 ease-in-out transform-all hover:scale-105 rounded"
                                />
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/recipe/${recipeitems.id}`}>
                                <CardTitle className="text-center">{recipeitems.name}</CardTitle>
                            </Link>
                            <CardDescription className="m-3 text-justify">
                                {recipeitems.instructions[1]}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between mx-4">
                            <h5 className="font-bold">Rating: {recipeitems.rating}</h5>
                            <h6 className="font-bold">{recipeitems.mealType}</h6>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
// hum sirf child component ko key denge bas (yaha pe child compoent card hai jisme ki server data fetch hoga)