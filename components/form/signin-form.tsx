"use client";

import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { catchClerkError } from "@/lib/utils";
import { authSchema } from "@/lib/validations/auth";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { PasswordInput } from "../password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type Inputs = z.infer<typeof authSchema>;

export function SignInForm() {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  //? React Hook Form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });

          router.push(`${window.location.origin}/`);
        } else {
          //? Investigate why the login hasn't completed
          console.log(result);
        }
      } catch (err) {
        catchClerkError(err);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="anthonygrace@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
