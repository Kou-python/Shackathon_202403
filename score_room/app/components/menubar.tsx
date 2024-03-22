
import { Menu, MenuButton, MenuList, MenuItem, Box} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";



function MenuBar(){
    return(
        <Box maxWidth={400} h={"30px"}>
            <Box float={"right"} mx={2}>
                <Menu>
                    <MenuButton>
                        <GiHamburgerMenu size={30}/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>記録をみる</MenuItem>
                        <MenuItem>新規画像のアップロード</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}

export default MenuBar;