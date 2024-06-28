'use client'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { formData, formSchema } from "../assets/schema";
import { sendEmail } from "../assets/action";


export default function ContactForm() {
    const {toast} = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            body: '',
        }
    })

    const onSubmit = async (data: formData) => {
        await sendEmail(data);

        toast({
            title: 'Email sent!',
        });
    }
    
    return (
        <div className="container mx-auto pt-20">
            
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                <h1 className="font-bold text-center text-primary/90 text-4xl mb-5 lg:text-6xl">Contact</h1>
                <p className="text-center text-muted-foreground mb-6">Give me feedbacks or questions!</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="shadcn" {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea placeholder="shadcn" {...field} />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>

            </div>
        </div>
    );
}
