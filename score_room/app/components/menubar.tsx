
import { Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";

function MenuBar(){
    return(
        <Menu>
            <MenuButton>
                メニュー
            </MenuButton>
            <MenuList>
                <MenuItem>これまでの記録</MenuItem>
                <MenuItem>新規画像のアップロード</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuBar;