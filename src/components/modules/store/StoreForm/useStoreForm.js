import {useState, useEffect} from "react";
import * as yup from "yup";
import {getData, postData} from "../../../../api/api-instance";
import {STORE_TYPE_URL, STORE_URL} from "../../../../api/api-url-consts";
import {message} from "antd";

export const useStoreForm = (setCurrentContainer) => {

    const [storeTypeOptions, setStoreTypes] = useState([]);

    const initialValues = {
        userId: 1,
        rating: 0,
        name: '',
        email: '',
        description: '',
        storeType: ''
    };

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        description: yup.string().max(254),
        storeType: yup.number().required()
    });


    useEffect(() => {
        getData(STORE_TYPE_URL)
            .then(result => setStoreTypes(result.data))
            .catch(error => {
                console.error(error);
                message.error('Error on load values');
            })
    }, []);

    const handleSubmit = (formData) => {
        postData(STORE_URL, formData)
            .then(() => {
                setCurrentContainer('LIST');
                message.success('Success Saved');
            })
            .catch(error => {
                console.error(error);
                message.error('Error to Save');
            });
    };

    return {schema, initialValues, handleSubmit, storeTypeOptions};
};
