"use client";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import Link from "next/link";

export default function NewSubmission() {
  return (
    <>
      <TableCell className="font-bold">3GdwdsbFQ213g2Aad3</TableCell>
      <TableCell className="font-bold">06/15/2024 10:21 EST</TableCell>
      <TableCell className="font-bold">Hylins</TableCell>
      <TableCell className="font-bold">
        <Link className="text-indigo-700 underline" href={"https://x.com"}>
          View
        </Link>
      </TableCell>
      <TableCell className="flex justify-end space-x-2.5">
        <Button className="bg-green-700">Approve</Button>
        <Button variant={"destructive"}>Deny</Button>
      </TableCell>
    </>
  );
}
