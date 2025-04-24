"use client";


import { FcGoogle } from "react-icons/fc";
import { FaGit } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social =() => {
    return (
        <div className="flex items-center w-full gap-x-2 ">
            <Button 
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
            <FcGoogle className="h-5 w-5"/>    
            </Button>


            <Button 
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
            <FaGit className="h-5 w-5"/>    
            </Button>



        </div>
    );
};