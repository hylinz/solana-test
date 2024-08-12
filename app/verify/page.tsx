import { VerifyForm } from "@/components/verify/form";

export default function Verify() {
  return (
    <main className="flex flex-col space-y-2.5 items-center justify-center h-screen bg-primary">
                <div>LOGO</div>
      <div className="w-1/3 text-secondary">
        <span>
        For the purpose of distributing your tokens, we kindly request your
        Solana wallet address. Please note that sharing your wallet address is
        completely secure and does not grant us access to your funds.
        <br/>
        <br/>
        Additionally, to verify your airdrop task completion and compliance with the
        reward terms, we also require your email address and a link to your
        promotional post on X.
        </span>
      </div>
      <VerifyForm />
    </main>
  );
}
