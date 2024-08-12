"use client";
import { searchWallet, newWallet } from "@/app/actions/wallets";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TransactionalHistory from "@/components/team/transaction-history";
import NewSubmission from "@/components/team/new-submissions";
type handling = {
  canAdd: Boolean;
  connection_string: string;
};

export default function Team() {
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [handling, setHandling] = useState<handling>();
  const search = async (connection_string: string) => {
    const result = await searchWallet(connection_string);
    if (result.success && result.canAdd) {
      setHandling({
        canAdd: true,
        connection_string: connection_string,
      });
      toast({
        title: "Success!",
        description: result.message,
      });

      return;
    }
    toast({
      title: "Error",
      variant: "destructive",
      description: result.message,
    });
  };
  const addWallet = async (connection_string: string) => {
    const result = await newWallet(connection_string);
    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      clear();
      return;
    }
    toast({
      title: "Error",
      variant: "destructive",
      description: result.message,
    });
  };
  const clear = () => {
    setInput("");
    setHandling({
      canAdd: false,
      connection_string: "",
    });
  };


return(
    <main className="flex flex-col p-12 space-y-5">
      <div className="flex w-full justify-between">
        <Card className="">
          <CardHeader>
            <CardTitle>Wallet funds</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-2.5">
            <p className="font-bold">$SHITCOIN/SOL: </p>
            <p className="text-green-600 font-bold">9,501,000</p>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Served submissions</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-2.5">
            <p className="font-bold">831</p>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Unserved submissions</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-2.5">
            <p className="font-bold text-destructive">1</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full space-x-5">
        {/* left */}
        <section className="flex flex-col space-y-5 border-secondary/20 rounded shadow-md border-1 p-2.5">
          <h2 className="font-bold text-2xl">Tools</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Verify wallet</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter a solana wallet address</DialogTitle>
                <DialogDescription>
                  <div className="flex w-full flex-col p-5 rounded bg-primary/20 mb-20 space-x-2.5 space-y-5">
                    <Input
                      maxLength={44}
                      value={input}
                      placeholder="Enter a solana wallet adderss"
                      onChange={(e) =>
                        setInput(e.target.value.replace(" ", ""))
                      }
                    />
                    <Button onClick={() => search(input)}>Search</Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                {handling && handling?.canAdd && handling.canAdd === true ? (
                  <>
                    <Table>
                      <TableCaption>
                        Currently handling wallet address:
                        {handling.connection_string}
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>wallet address</TableHead>

                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-bold">
                            {handling.connection_string}
                          </TableCell>
                          <TableCell className="flex justify-end space-x-2.5">
                            <Button
                              onClick={() =>
                                addWallet(handling.connection_string)
                              }
                            >
                              Add
                            </Button>
                            <Button
                              variant={"destructive"}
                              onClick={() => clear()}
                            >
                              Clear
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </>
                ) : (
                  ""
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button>Set reward amount</Button>
          <Button>Send</Button>
          <Button>Edit Promotion</Button>
          <Button variant={"destructive"}>Cancel Promotion</Button>
        </section>
        <Separator orientation="vertical" decorative className="w-2" />
        {/* right */}
        <section className="flex flex-col w-full flex-1 space-y-5">
          <h3 className="font-bold text-2xl">Unhandled submissions</h3>
          {/* New Submission */}
          <Table>
            <TableCaption>New completions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>wallet address</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>X Post</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {/* Needs a map function & interface/dataprops */}
                <NewSubmission />
              </TableRow>
            </TableBody>
          </Table>
          <Separator />
          {/* New Transactions */}
          <h3 className="font-bold text-2xl">Transaction history</h3>
          <Table>
            <TableCaption>New completions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>wallet address</TableHead>
                <TableHead>Ticker</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Handled by</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {/* Needs a map function & interface/dataprops */}
                <TransactionalHistory />
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
}
