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
} from "@/components/ui/card"
const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });

export default function SingleRecipeList({ single_recipes_list }) {
    // console.log(single_recipes_list);

    return (
        <div className="pb-10 px-5">
            <div className={audiowide.className}>
                <h1 className="text-4xl font-bold m-5 py-5 tracking-widest text-center captilize" key={single_recipes_list.id} > {single_recipes_list.name} </h1>
            </div>



            <div className="md:flex  gap-10 justify-evenly">
                <Card className="md:my-0 my-16">
                    <CardHeader>
                        <Link href={`/recipe/${single_recipes_list.id}`}>   <Image src={single_recipes_list.image} alt="this is image" width={500} height={100} className=" transition duration-500 ease-in-out transform-all  hover:scale-105 rounded" key={single_recipes_list.id} /></Link>
                    </CardHeader>
                    <CardContent>
                        <Link href={`/recipe/${single_recipes_list.id}`}>   <CardTitle key={single_recipes_list.id} className="text-center">{single_recipes_list.name}</CardTitle></Link>
                        <CardDescription key={single_recipes_list.id} className="m-3 text-justify">{single_recipes_list.instructions[1]}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between mx-4">
                        <h5 key={single_recipes_list.id} className="font-bold">Rating : {single_recipes_list.rating} </h5>
                        <h6 key={single_recipes_list.id} className="font-bold" > {single_recipes_list.mealType} </h6>
                    </CardFooter>
                </Card>

                <Card>
                    
                        <CardHeader>
                            <CardTitle key={single_recipes_list.id} className="text-center mb-10 mt-5 tracking-wider  "> {single_recipes_list.name}</CardTitle>
                            <CardTitle key={single_recipes_list.id} className="text-center text-md tracking-wider"> Cuisine : {single_recipes_list.cuisine}</CardTitle>
                        </CardHeader>
                    
                    <CardContent>
                        <CardDescription key={single_recipes_list.id} className="m-3 mt-10 text-justify"><span className="underline">Ingredients</span> :  {single_recipes_list.ingredients[0]} , {single_recipes_list.ingredients[1]} , {single_recipes_list.ingredients[2]} , {single_recipes_list.ingredients[3]} , {single_recipes_list.ingredients[4]} , {single_recipes_list.ingredients[5]} .</CardDescription>


                        <CardDescription key={single_recipes_list.id} className="m-3 text-justify md:mb-0 mb-10"> <span className="underline">Instructions</span> :
                            <ul className="list-disc md:ml-medium-wide md:mt-0 mt-2 ml-5">
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[0]} </li>
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[1]}</li>
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[2]}</li>
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[3]}</li>
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[4]}</li>
                                <li key={single_recipes_list.id}>{single_recipes_list.instructions[5]}</li>
                            </ul>

                        </CardDescription>

                        <CardDescription key={single_recipes_list.id} className="m-3 text-justify"><span className="underline">PrepTimeMinutes</span> : {single_recipes_list.prepTimeMinutes}</CardDescription>

                        <CardDescription key={single_recipes_list.id} className="m-3 text-justify"><span className="underline">CookTimeMinutes</span> : {single_recipes_list.cookTimeMinutes}</CardDescription>

                        <CardDescription key={single_recipes_list.id} className="m-3 text-justify"><span className="underline">CaloriesPerServing</span> : {single_recipes_list.caloriesPerServing}</CardDescription>


                    </CardContent>
                    <CardFooter className="md:flex block justify-between md:mx-4 md:mt-8  ">
                        <h5 key={single_recipes_list.id} className="font-bold md:text-left text-center my-2">Rating: {single_recipes_list.rating} </h5>
                        <h6 key={single_recipes_list.id} className="font-bold md:text-right text-center my-2" > MealType : {single_recipes_list.mealType} </h6>
                    </CardFooter>
                </Card>

            </div>

        </div>

    );
}