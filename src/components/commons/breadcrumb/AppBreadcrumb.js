import {Breadcrumb} from "antd";
import React from "react";

const AppBreadcrumb = () => {

    return (
        <Breadcrumb className={'app-breadcrumb'}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
};

export default AppBreadcrumb;
