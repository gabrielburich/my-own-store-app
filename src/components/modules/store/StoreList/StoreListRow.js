import React from "react";
import {List, Skeleton, Rate, Avatar, Button} from "antd";

const StoreListRow = ({store, loading, handleEdit, handleDelete}) => {

    const ListActions = [
        <Button onClick={() => handleEdit(store.id)}>Edit</Button>,
        <Button onClick={() => handleDelete(store.id)}>Delete</Button>
    ];

    return (
        <List.Item
            actions={ListActions}
        >
            <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                    avatar={ <Avatar shape={'square'} size={64} icon={'user'} />}
                    title={<label>{store.name}</label>}
                    description={store.description}
                />
                <Rate allowHalf value={store.rating} disabled={true}/>
            </Skeleton>
        </List.Item>
    );
};

export default React.memo(StoreListRow);
