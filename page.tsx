"use client"

import MenuBar from "./components/menubar";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import Kiroku from "./kiroku";
import ConnectToPython from "./components/connectToPython";

export default function Home() {
  const PostData = [
    {imgpath: "/SampleImages/Sample3.png",score:50, date:"2024-3-9(土) 19:50"},
    {imgpath: "/SampleImages/Sample2.png",score:0, date:"2024-3-11(月) 14:18"},
    {imgpath: "/SampleImages/Sample1.png",score:65, date:"2024-3-13(水) 20:15"}
]
async function hoge(event: FormEvent<HTMLFormElement>){
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const imgFileName = formData.get("img")
  console.log(imgFileName)
  const res = await fetch("http://localhost:8000/")
  console.log(res.json())
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <ChakraProvider>
        <Box width={380}>
          <Box background="lightgray" p={1} m={1} borderRadius={5}>
            <form method="POST" onSubmit={hoge}>
              新規ファイルの追加
              <input type="file" name="img" required/>
              <input type="submit" value="ok" style={{background:"#ccf",padding:"2px"}}/>
            </form>
          </Box>

          {/* <MenuBar/> */}
          <Kiroku PostData ={PostData}/>
        </Box>
      </ChakraProvider>
    </main>
  );
}
