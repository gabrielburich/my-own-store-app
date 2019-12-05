import {useState, useEffect} from "react";
import * as yup from "yup";
import {getData, postData} from "../../../../api/api-instance";
import {STORE_TYPE_URL, STORE_URL} from "../../../../api/api-url-consts";
import {message} from "antd";

export const useStoreForm = (setCurrentContainer) => {

    const [storeTypes, setStoreTypes] = useState([]);

    const defaultValues = {
        name: '',
        email: '',
        description: '',
        storeType: {}
    };

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        description: yup.string().max(254),
        storeType: yup.object().required()
    });


    useEffect(() => {
        getData(STORE_TYPE_URL)
            .then(result => setStoreTypes(result.data))
            .catch(error => {
                console.error(error);
                message.error('Error on load values');
            })
    }, []);

    const onSubmit = (formData) => {
        const store = {...formData, storeType: formData.storeType.value, userId: 1, rating: 0};

        postData(STORE_URL, store)
            .then(() => {
                setCurrentContainer('LIST');
                message.success('Success Saved');
            })
            .catch(error => {
                console.error(error);
                message.error('Error to Save');
            });
    };

    return {schema, onSubmit, storeTypes, defaultValues};
};
