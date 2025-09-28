
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 gap-12 text-white-700">
      <div className="flex-1 flex flex-col items-start max-w-xl space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight">Hello, I'm</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white-900 drop-shadow">
          Rahul Kumar <br /> Bharti
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Full-Stack &amp; AI Developer
        </h2>
        <Button className="mt-6" size="lg">
          Contact Me
        </Button>
      </div>
      <div className="flex-1">
        <Image
          width={200}
          height={200}
          src="/profile2.png"
          alt="Profile Picture"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
};