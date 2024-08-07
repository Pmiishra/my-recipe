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

export default function SingleRecipeList({ single_recipes_list }) {
    return (
        <div className="pb-10 px-5">
            <div className={audiowide.className}>
                <h1 className="text-4xl font-bold m-5 py-5 tracking-widest text-center capitalize">
                    {single_recipes_list.name}
                </h1>
            </div>

            <div className="md:flex gap-10 justify-evenly">
                {/* card first */}
                <Card key={single_recipes_list.id} className="md:my-0 my-16">
                    <CardHeader>
                        <Link href={`/recipe/${single_recipes_list.id}`}>
                            <Image
                                src={single_recipes_list.image}
                                alt="Recipe image"
                                width={500}
                                height={100}
                                className="transition duration-500 ease-in-out transform-all hover:scale-105 rounded"
                            />
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <Link href={`/recipe/${single_recipes_list.id}`}>
                            <CardTitle className="text-center">{single_recipes_list.name}</CardTitle>
                        </Link>
                        <CardDescription className="m-3 text-justify">
                            {single_recipes_list.instructions[1]}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between mx-4">
                        <h5 className="font-bold">Rating: {single_recipes_list.rating}</h5>
                        <h6 className="font-bold">{single_recipes_list.mealType}</h6>
                    </CardFooter>
                </Card>

                {/* card second */}
                <Card key={single_recipes_list.id}>
                    <CardHeader>
                        <CardTitle className="text-center mb-10 mt-5 tracking-wider">
                            {single_recipes_list.name}
                        </CardTitle>
                        <CardTitle className="text-center text-md tracking-wider">
                            Cuisine: {single_recipes_list.cuisine}
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <CardDescription className="m-3 mt-10 text-justify">
                            <span className="underline">Ingredients</span>: {single_recipes_list.ingredients.join(", ")}
                        </CardDescription>

                        <CardDescription className="m-3 text-justify">
                            <span className="underline">Prep Time (Minutes)</span>: {single_recipes_list.prepTimeMinutes}
                        </CardDescription>

                        <CardDescription className="m-3 text-justify">
                            <span className="underline">Cook Time (Minutes)</span>: {single_recipes_list.cookTimeMinutes}
                        </CardDescription>

                        <CardDescription className="m-3 text-justify">
                            <span className="underline">Calories Per Serving</span>: {single_recipes_list.caloriesPerServing}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="md:flex block justify-between md:mx-4 md:mt-8">
                        <h5 className="font-bold md:text-left text-center my-2">
                            Rating: {single_recipes_list.rating}
                        </h5>
                        <h6 className="font-bold md:text-right text-center my-2">
                            Meal Type: {single_recipes_list.mealType}
                        </h6>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
// hum sirf child component ko key denge bas (yaha pe child compoent 2 card hai jisme ki server data fetch hoga isliye hum dono ko key denge)
