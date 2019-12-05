import React, {useState} from "react";
import "./Store.css";

import StoreList from "./StoreList/StoreList";
import StoreForm from "./StoreForm/StoreForm";
import {deleteData} from "../../../api/api-instance";
import {STORE_URL} from "../../../api/api-url-consts";
import {message} from "antd";

const StoreContainer = () => {

    const [LIST, FORM] = ['LIST', 'FORM'];
    const [currentContainer, setCurrentContainer] = useState(LIST);

    const [recordId, setRecordId] = useState(null);

    const handleEdit = (id) => {
        setRecordId(id);
        setCurrentContainer(FORM);
    };


    return (
        <>
            {currentContainer === LIST && <StoreList handleEdit={handleEdit}/>}
            {currentContainer === FORM && <StoreForm recordId={recordId} setCurrentContainer={setCurrentContainer}/>}
        </>
    );
};

export default React.memo(StoreContainer);
