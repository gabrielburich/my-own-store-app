import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";

const AppMenu = () => {

    const items = [
        {label: 'Stores', icon: 'appstore', to: '/'},
    ];

    const menuItems = useMenuItems(items);

    return (
        <Menu defaultSelectedKeys={['0']} mode={'inline'} theme="dark">
            {menuItems}
        </Menu>
    );
};

export default React.memo(AppMenu);
