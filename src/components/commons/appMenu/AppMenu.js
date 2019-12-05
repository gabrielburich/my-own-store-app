import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";

const AppMenu = () => {

    const items = [
        {label: 'Stores', icon: 'appstore', to: '/store/'},
    ];

    const menuItems = useMenuItems(items);

    return (
        <Menu defaultSelectedKeys={['0']} mode={'inline'}>
            {menuItems}
        </Menu>
    );
};

export default React.memo(AppMenu);
