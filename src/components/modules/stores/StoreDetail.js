import React from "react";
import {Col, PageHeader, Row} from "antd";

const StoreDetail = ({item, handleBack}) => {

    return (
        <Row>
            <Col span={24}>
                <PageHeader
                    title={item.name}
                    subTitle={item.description}
                    onBack={handleBack}
                />
            </Col>
        </Row>
    )

};

export default StoreDetail;