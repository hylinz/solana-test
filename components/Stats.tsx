import { DollarSign, PersonStanding, TrendingUp } from "lucide-react";

export default function Stats() {
  return (
    <div className="stats rounded-none shadow bg-primary text-secondary">
      <div className="stat">
        <div className="stat-figure ">
          <PersonStanding />
        </div>
        <div className="stat-title text-secondary">Holders</div>
        <div className="stat-value text-accent">64.6K</div>
        <div className="stat-desc text-secondary">10% more than last week</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <TrendingUp />
        </div>
        <div className="stat-title text-secondary">Market Cap</div>
        <div className="stat-value text-secondary">$44,021,682</div>
        <div className="stat-desc text-secondary">And growing everyday!</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <DollarSign />
        </div>
        <div className="stat-title text-secondary">$SHITCOIN Airdropped</div>
        <div className="stat-value text-money">$ 25.000+</div>
        <div className="stat-desc text-secondary">Claim your reward today!</div>
      </div>
    </div>
  );
}
