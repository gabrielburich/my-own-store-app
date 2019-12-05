import React from "react";
import {Button, List} from 'antd';
import {useStoreList} from "./useStoreList";
import StoreListRow from "./StoreListRow";

const StoreList = ({handleEdit}) => {

    const {stores, onLoadMore, loading, initLoading, handleDelete} = useStoreList();

    const loadMore = (
        <div className={'load-button'}>
            <Button onClick={onLoadMore}>loading more</Button>
        </div>
    );

    return (
        <List loading={initLoading} itemLayout={'horizontal'} loadMore={loadMore} dataSource={stores}
              renderItem={item => <StoreListRow store={item} loading={loading} handleEdit={handleEdit}
                                                handleDelete={handleDelete}/>
              }
        />
    );
};

export default React.memo(StoreList);
