"use client";
import { Button } from "@/components/ui/button";
import {
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { FlagIcon } from "lucide-react";

export default function TransactionalHistory() {
  return (
    <>
      <TableCell className="font-bold">bQdda123FG23wsdg23A</TableCell>
      <TableCell className="font-bold">$SHITCOIN</TableCell>
      <TableCell className="font-bold">500</TableCell>
      <TableCell className="font-bold">06/15/2024 09:42 EST</TableCell>
      <TableCell className="font-bold">
        {" "}
        <Link className="text-indigo-700 underline" href={"/"}>
          @hylins
        </Link>
      </TableCell>
      <TableCell className="flex justify-end space-x-2.5">
        <Button>View on Solscan</Button>
        <Button variant={"destructive"}>
          <FlagIcon className="" />
        </Button>
      </TableCell>
    </>
  );
}
