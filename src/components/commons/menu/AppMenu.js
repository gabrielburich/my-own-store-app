import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";

const AppMenu = () => {

    const items = [
        {label: 'Home', icon: 'home', to: '/'},
        {label: 'Store', icon: 'plus-square', items: [
            {label: 'List', icon: 'rest', to: '/store/'}
        ]},
    ];

    const menuItems = useMenuItems(items);

    return (
        <Menu mode={'inline'} theme={'dark'}>
            {menuItems}
        </Menu>
    );
};

export default AppMenu;
