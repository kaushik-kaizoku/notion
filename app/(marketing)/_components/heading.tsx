"use client"

import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();


    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Your Ideas, Documents, &Plans. Unified. Welcome to <span className="underline">Notion</span> 
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl font-medium">
                Notion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            {isLoading && (
                <div className="flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button size="sm">
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-2"/>  
                    </Button>
                </SignInButton>
            )}
            {isAuthenticated && !isLoading && (
                <Button size="sm">
                    <Link href="/documents" className="flex items-center">
                        Enter Notion
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}

        </div>
    )
}