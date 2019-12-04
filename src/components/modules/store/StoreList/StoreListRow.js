import React from "react";
import {List, Skeleton, Rate, Avatar} from "antd";

const StoreListRow = ({store, loading}) => {

    return (
        <List.Item
            actions={['Products']}
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
