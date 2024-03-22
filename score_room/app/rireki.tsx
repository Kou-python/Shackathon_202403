import { Box } from "@chakra-ui/react"
import Post from "./components/post";

export default function Rireki(props){
    return (
        <Box m={0} p={0}>
            {props.PostData.slice().reverse().map((name, index)=>(
            <Post PostDataThis = {name} key= {index}/>
            ))}
        </Box>
    )
}