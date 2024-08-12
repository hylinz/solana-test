"use client"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { ModeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
export default function TeamNavBar() {
    return (
        <nav className="w-full flex py-2.5 px-5 bg-black">
            <div className="flex space-x-2.5 flex-1 w-full items-center text-secondary">
                <div>LOGO</div>
                <Link href={"/"}>Dashboard</Link>
                <Link href={"/"}>Settings</Link>
                <Link href={"/"}>Team</Link>
            </div>
            <div className="flex justify-end space-x-2.5 flex-1 w-full items-center">
                <WalletMultiButton />
                <ModeToggle />
            </div>
        </nav>
    )
}