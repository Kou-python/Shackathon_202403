import React from "react";
import { Box, Image, Card, CardHeader, CardBody} from "@chakra-ui/react";
import getBadgeFromScore from "./getBadgeFromScore";

function Post(props){
    const PostData_this = props.PostDataThis
    return(            
    <Card m = {"10px auto"} maxW={350} p={1} minH={150}>
        <CardHeader p={2}>{PostData_this.date}</CardHeader>
        <CardBody display={"flex"} pt={1} paddingRight={"0px"}>
            {/* 画像 */}
            <Image src={PostData_this.imgpath} width={"80%"} borderRadius={5}></Image>
            {/* スコアとバッジ */}
            <ShowScore  score = {PostData_this.score}/>
        </CardBody>
    </Card>
    )
}

function ShowScore(props){
    // バッジごとの色を設定
    const badge = getBadgeFromScore(props.score)
    
    return (
        <Box display={"flex"} alignItems={"flex-end"} justifyContent={"center"} width={"20%"}>
        <Box height = {100}>
            <Box height={50} textAlign={"center"} fontSize={30}>
                {/* スコア */}
                {props.score}
            </Box>
            <Box height={50}>
                <Box background={badge.color} display={"flex"} w={12} h={12} borderRadius={15} fontSize={25} fontWeight={"bold"} alignItems={"center"} justifyContent={"center"}>
                    {/* バッジ */}
                    {badge.name}
                </Box>
            </Box>
            </Box>
    </Box>          
    )
}

export default Post;