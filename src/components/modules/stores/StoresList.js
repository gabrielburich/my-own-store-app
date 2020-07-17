import React from "react";
import {List, Button} from "antd";

const ListItem = List.Item;
const ItemMeta = List.Item.Meta;

const StoresList = ({dataset, handleDetail}) => {

    const renderItem = (item) => (
        <ListItem actions={[<Button type={'link'} onClick={() => handleDetail(item)}>More</Button>]}>
            <ItemMeta title={item.name} description={item.description}/>
        </ListItem>
    );

    return <List dataSource={dataset} renderItem={renderItem}/>;

};

export default StoresList;