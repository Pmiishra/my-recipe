import SingleRecipeList from "@/components/SingleRecipeList";


async function SingleRecipe(sid) {
    try {
        const api = await fetch(`https://dummyjson.com/recipes/${sid}`);
        const res = await api.json();
        return res;
        
    } catch (error) {
        throw new Error(error);
    }
    
}
export default async function singleRecipePage({params}) {
    const single_recipes_list = await SingleRecipe(params.singleRecipe);
    return (
        <div>
            <SingleRecipeList  single_recipes_list={single_recipes_list} />
        </div>
    );
}
