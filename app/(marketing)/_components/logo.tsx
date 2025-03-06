import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight:["400","600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image src="notion.svg" alt="logo" height="30" width="30"/>
            <p className={cn("semi-bold", font.className)}>Notion</p>            
        </div>
    );
};