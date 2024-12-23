import Image from "next/image";
import { CardContainer } from "./components/CardContainer";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <CardContainer />
    </div>
  );
}
