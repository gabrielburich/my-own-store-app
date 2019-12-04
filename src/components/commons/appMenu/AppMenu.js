import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";

const AppMenu = () => {

    const items = [
        {label: 'Dashboard', icon: 'dashboard', to: '/'},
        {label: 'Stores', icon: 'appstore',
            items: [
                {label: 'List Store', icon: 'ordered-list', to: '/store/'},
                {label: 'Create Store', icon: 'plus-square', to: '/store/add'},
            ]
        }
    ];

    const menuItems = useMenuItems(items);

    return (
        <Menu defaultSelectedKeys={['0']} mode={'inline'}>
            {menuItems}
        </Menu>
    );
};

export default React.memo(AppMenu);
