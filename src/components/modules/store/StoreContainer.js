import React, {useState} from "react";
import "./Store.css";

import StoreList from "./StoreList/StoreList";
import StoreForm from "./StoreForm/StoreForm";

const StoreContainer = () => {

    const [LIST, FORM] = ['LIST', 'FORM'];

    const [currentContainer, setCurrentContainer] = useState(FORM);


    return (
        <>
            {currentContainer === LIST && <StoreList/>}
            {currentContainer === FORM && <StoreForm setCurrentContainer={setCurrentContainer}/>}
        </>
    );
};

export default React.memo(StoreContainer);
