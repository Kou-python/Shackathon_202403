import Rireki from "./rireki";
import MenuBar from "./components/menubar";
import { ChakraProvider } from "@chakra-ui/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChakraProvider>
        <MenuBar />
        <Rireki />
      </ChakraProvider>
    </main>
  );
}
