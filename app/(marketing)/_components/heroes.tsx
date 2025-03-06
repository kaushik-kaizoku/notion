import Image from "next/image"

export const Heroes = () => {
    return(
        <div className="flex items-center">
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px]">
                <Image src="guy-coding.svg" fill className="object-contain" alt="documents"/>
            </div>
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] hidden sm:block">
                <Image src="bookkeeper-1.svg" fill className="object-contain" alt="documents"/>
            </div>
        </div>
    )
}

