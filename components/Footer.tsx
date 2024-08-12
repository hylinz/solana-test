import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-primary text-secondary p-10">
      <aside>
      <div>LOGO</div>

        <p>Copyright © 2024 SHITCOIN</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href={"/"}>
            <Instagram />
          </Link>

          <Link href={"/"}>
            <Twitter />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
