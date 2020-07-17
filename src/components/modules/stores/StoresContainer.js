import React, {useEffect, useState} from "react";
import {getData} from "../../../api/api";
import {STORE_URL} from "../../../api/api-url-consts";

import StoresList from "./StoresList";
import StoreDetail from "./StoreDetail";

const StoresContainer = () => {

    const [LIST, DETAIL] = ['LIST', 'DETAIL'];

    const [dataset, setDataset] = useState([]);
    const [detailItem, setDetailItem] = useState([]);
    const [visualization, setVisualization] = useState(LIST);

    useEffect(() => {
        getData(STORE_URL)
            .then(result => setDataset(result.data))
            .catch(error => console.error(error));
    }, []);

    const toggleVisualization = () => setVisualization(visualization => visualization === LIST ? DETAIL : LIST);

    const handleDetail = (item) => {
        setDetailItem(item);
        toggleVisualization()
    };

    return (visualization === LIST)
            ? <StoresList dataset={dataset} handleDetail={handleDetail} />
            : <StoreDetail item={detailItem} handleBack={toggleVisualization} />
};

export default StoresContainer;
