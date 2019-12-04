import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";

const AppMenu = () => {

    const items = [
        {label: 'Dashboard', icon: 'dashboard', to: '/'},
        {label: 'Stores', icon: 'appstore', to: '/store/'},
        {label: 'Cadastro', icon: 'mobile',
            items: [
                {label: 'Home', icon: 'home', to: '/'},
                {label: 'Home2', icon: 'home', to: '/'},
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
