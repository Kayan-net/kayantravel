"use client";

import * as z from "zod"


import { useState, useTransition } from "react";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import { Input } from "../ui/input";

import { LoginSchema } from "@/schemas";


import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";


export const LoginForm = () => {
const [error,setError] =useState<string | undefined>("");
const [success,setSuccess] =useState<string | undefined>("");


    const [isPending,startTransition] =useTransition();
const form = useForm<z.infer<typeof LoginSchema>>({
  resolver: zodResolver(LoginSchema),
  defaultValues: {
    email: "",
    password: "",
  }, 
});


const onSubmit =(values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

startTransition(()  => {
login(values)
.then((data)  =>{
setError(data.error);
setSuccess(data.success);
});
});
    
};


    return(
        <CardWrapper
headerLabel="WelCome back"
backButtonLabel="Dont have an Account?"
backButtonHref="register"
showSocial
>
        <Form {...form}>

<form 
onSubmit={form.handleSubmit(() => {})}
className="space-y-6"
>
    <div className="space-y-4">
        <FormField
        control={form.control}
        name="email"
        render={({ field}) =>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input
                    {...field}
                    disabled={isPending}
                    placeholder="khp@example.com"
                    type="email"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        
        />


<FormField
        control={form.control}
        name="password"
        render={({ field}) =>(
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input
                    {...field}
                    disabled={isPending}
                    placeholder="******"
                    type="password"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        
        />





    </div>


    {/* message="Invalid Credentials!" */}
    {/* message="Email sent!" */}


<FormError message={error}/>
<FormSuccess message={success}/>

    <Button
    disabled={isPending}
    type="submit"
    className="w-full"
    >Logins</Button>

</form>
        </Form>
        
        </CardWrapper>
    );
};

