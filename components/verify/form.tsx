"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  address: z.string().max(44).min(44, {
    message: "Invalid Solana contact address.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  x: z.string().url({
    message: "Invalid post url.",
  }),
});

export function VerifyForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: "",
      email: "",
      x: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    if (data.x && !data.x.startsWith("https://x.com/")) {
      form.setError("x", {
        type: "manual",
        message: "The post URL must start with https://x.com/",
      });

      return;
    }

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-secondary">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/3 space-y-6 text-secondary"
      >
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Solana wallet address</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  type="text"
                  max={44}
                  min={44}
                  placeholder="Example YouR2cOol5adDressrdWxp1yJmQ4d5Bt2uZj7LbHkPq3 ..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your "recieve" wallet address, a unique 44 alphanumeric
                contact string, to which the team will send the funds.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  type="email"
                  maxLength={320}
                  placeholder="hodl@neverselling.co.uk"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your email address, this address must match the one you
                used to sign up to the airdrop program.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="x"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL to X post</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  type="url"
                  maxLength={255}
                  placeholder="https://x.com/TheRoaringKitty/status/1801313585421029445"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
