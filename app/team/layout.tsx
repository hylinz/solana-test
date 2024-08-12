import type { Metadata } from "next";
import { Wallet } from "@/components/Wallet";
import TeamNavBar from "@/components/team/TeamNavBar";

export const metadata: Metadata = {
  title: "Solana airdrop test",
  description: "",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wallet>
      <TeamNavBar />
      {children}
    </Wallet>
  );
}
