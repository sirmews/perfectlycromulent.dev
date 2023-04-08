import Image from "next/image";
import { Inter } from "next/font/google";
import { Introduction } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Introduction />
      </div>
    </main>
  );
}
