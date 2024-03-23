// import MenuBar from "./components/menubar";
import { ChakraProvider, Box } from "@chakra-ui/react";
// import Kiroku from "./kiroku";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Page() {
  const PostData = [
    {
      imgpath: "/SampleImages/Sample3.png",
      score: 50,
      date: "2024-3-9(土) 19:50",
    },
    {
      imgpath: "/SampleImages/Sample2.png",
      score: 0,
      date: "2024-3-11(月) 14:18",
    },
    {
      imgpath: "/SampleImages/Sample1.png",
      score: 65,
      date: "2024-3-13(水) 20:15",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <ChakraProvider>
        <Button colorScheme="green">アップロード</Button>
      </ChakraProvider>
    </main>
  );
}
