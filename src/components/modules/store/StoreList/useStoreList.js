import {useEffect, useState} from "react";
import {deleteData, getFilterData} from "../../../../api/api-instance";
import {STORE_URL} from "../../../../api/api-url-consts";
import {message} from "antd";
import orderBy from "lodash/orderBy";

export const useStoreList = () => {

    const [initLoading, setIniLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [filterRating, setFilterRating] = useState(4);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        getDatasetFromApi();
    },[filterRating]); //eslint-disable-line

    const getDatasetFromApi = () => {
        setIniLoading(false);
        setLoading(true);

        const apiFilter = {field: 'rating', condition: 'gt', value: filterRating};
        getFilterData(STORE_URL, apiFilter)
            .then((result) => {
                setStores(orderBy(result.data, 'rating', 'desc') );
                setLoading(false);
                setIniLoading(false);
            })
            .catch((error) => {
                console.error(error);
                message.error('Error on load values');
                setLoading(false);
            })
    };

    const handleDelete = (id) => {
        deleteData(STORE_URL, id)
            .then(() => {
                getDatasetFromApi();
                message.success('Deleted');
            })
            .catch(error => {
                console.error(error);
                message.error('Error to Delete');
            });
    };

    const onLoadMore = () => {
        setFilterRating(filterRating - 1);
    };

  return {stores, onLoadMore, loading, initLoading, handleDelete};
};
