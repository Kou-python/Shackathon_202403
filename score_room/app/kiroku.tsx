import Rireki from "./rireki";
import LineGraph from "./components/graph";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

function Kiroku(props){
    return (
        <div>
            <Tabs variant={"soft-rounded"}>
                    <TabList justifyContent={"center"}>
                        <Tab>記録一覧</Tab>
                        <Tab>グラフ</Tab>
                    </TabList>
                <TabPanels>
                    <TabPanel>
                        <Rireki PostData = {props.PostData}/>
                    </TabPanel>
                    <TabPanel>
                        <LineGraph PostData = {props.PostData}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Kiroku;