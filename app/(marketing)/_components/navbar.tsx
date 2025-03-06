"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
    const scrolled = useScrollTop();
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
    <div className={cn("bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6 ", scrolled && "border-b shadow-sm")}>
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-2">
            {isLoading && <Spinner size="sm" />}
            {!isAuthenticated && !isLoading && (
                <>
                < SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                    Log In
                </Button>
                </ SignInButton >
                < SignInButton mode="modal">
                <Button size="sm"> 
                    Get Started
                </Button>
                </ SignInButton >
                </>
            )}
            {isAuthenticated && !isLoading && (
                <>
                <Button variant="ghost" size="sm" asChild>
                 <Link href="/documents">Enter Notion</Link>
                </Button>
                <UserButton afterSwitchSessionUrl="/"/>
                </>
            )}
            <ModeToggle />
        </div>
    </div>
    )
}