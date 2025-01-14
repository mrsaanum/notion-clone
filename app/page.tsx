import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>nu skriver vi kod</h1>
      <Button>Klicka här för tusan</Button>
      </main>
  );
}
