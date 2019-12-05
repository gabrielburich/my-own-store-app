import React, {useState, useEffect} from "react";
import "./Store.css";

import StoreList from "./StoreList/StoreList";
import StoreForm from "./StoreForm/StoreForm";

const StoreContainer = ({container}) => {

    const [LIST, FORM] = ['LIST', 'FORM'];
    const [currentContainer, setCurrentContainer] = useState(container);

    useEffect(() => {
        setRecordId(null);
        setCurrentContainer(container);
    }, [container]);

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
