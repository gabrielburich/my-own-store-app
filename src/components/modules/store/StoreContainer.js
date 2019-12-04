import React from "react";
import "./Store.css";

import StoreList from "./StoreList/StoreList";


const StoreContainer = () => {


    return <StoreList/>;
};

export default React.memo(StoreContainer);
