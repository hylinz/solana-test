import Link from "next/link";
export default function NavBar() {
  return (
    <div className="navbar bg-primary shadow-md shadow-black text-secondary sticky top-0 z-50">
      <div className="flex-1">
      <div>LOGO</div>

        <a className="btn btn-ghost text-xl">$SHITCOIN</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>News</Link>
          </li>{" "}
          <li>
            <Link href={"/"}>Get Involved</Link>
          </li>
          <li>
            <Link href={"/"}>FAQ</Link>
          </li>
          <li>
            <details>
              <summary>Airdrops</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href={"/"}>Get your airdrop</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
