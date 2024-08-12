"use client";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
      <div className="hero shadow-md shadow-black rounded bg-secondary min-h-screen md:min-h-[600px] text-primary padding-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/placeholder.jpg"
            className="max-w-sm rounded-lg shadow-2xl shadow-black"
          />
          <div className="px-16">
            <h1 className="text-xl md:text-4xl font-bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to the $SHITCOIN")
                    .start();
                }}
              />
            </h1>
            <p className="py-6 font-semibold">
              Take your first steps into the world of decentralized finance
              (DeFi) and get free airdrop together with us at $SHITCOIN
            </p>
            <Button variant={"default"}>Request airdrop</Button>
          </div>
        </div>
      </div>
  );
}

