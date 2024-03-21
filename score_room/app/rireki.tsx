import Post from "./components/post"

export default function Rireki(){
    return (
        <>
            <Post imgpath="/SampleImages/Sample1.png" score={65} date="2024/3/13(水) 20:15"/>
            <Post imgpath="/SampleImages/Sample2.png" score={30} date="2024/3/11(月) 14:18"/>
            <Post imgpath="/SampleImages/Sample3.png" score={50} date="2024/3/9(土) 19:50"/>
        </>
    )
}