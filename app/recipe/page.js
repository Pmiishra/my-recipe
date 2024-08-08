import Recipelist from "@/components/Recipelist";


export default async function recipe() {
    const recipes_list = await recipelist();
    return (
        <div>
            <Recipelist  recipes_list={recipes_list} />
        </div>
    );
}
async function recipelist() {
    try {
        const api = await fetch('https://dummyjson.com/recipes');
        const res = await api.json();
        return res?.recipes;
    } catch (error) {
        throw new Error(error);
    }
}