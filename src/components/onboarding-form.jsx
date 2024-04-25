"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
const OnboardingForm = () => {
  const form = useForm();

  const onSubmit = (values) => {
    localStorage.setItem("studioDetails", JSON.stringify(values));
  };

  return (
    <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-lg flex flex-col justify-center items-center">
      <h1 className="bg-gradient-to-r from-indigo-500 to-fuchsia-600 bg-clip-text text-transparent text-3xl sm:text-5xl font-bold">
        Welcome to museFI
      </h1>
      <p className="text-purple-700/70 mb-6">Excited to get you onboarded</p>
      <Card className="w-full md:w-[600px] bg-slate-800/20 border-purple-500/20 backdrop-blur-md p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="owner name"
                      {...form.register("owner")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studioName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">Studio name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Studio name"
                      {...form.register("studioName")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    Studio loction
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Studio location"
                      {...form.register("location")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2">
              <h1 className="font-semibold text-purple-700/70 text-lg">
                Other information
              </h1>
              <div className="flex md:flex-row flex-col w-full gap-2">
                <FormField
                  control={form.control}
                  name="musicsProduced"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-purple-200">
                        Number of musics produced
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="100"
                          {...form.register("musicsProduced")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfArtists"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-purple-200">
                        Number of artists worked with
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="20"
                          {...form.register("numberOfArtists")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="bg-purple-800/80 w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default OnboardingForm;
