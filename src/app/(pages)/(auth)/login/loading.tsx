import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const Loading=()=>{
    console.log("this is bing rendered")
    return(
        <Button disabled
        className="text-[1.6em] px-16 py-8">
                <Loader className="animate-spin"></Loader>
        </Button>
    )
}

export default Loading;