import { Skeleton } from "@/components/ui/skeleton";


export default function loading() {
    return (
        <div>
            <h1 className="text-blod text-xl"> LOADING....</h1>
            <Skeleton/>
        </div>
    );
}