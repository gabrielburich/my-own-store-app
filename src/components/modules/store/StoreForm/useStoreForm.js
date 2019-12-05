import {useState, useEffect} from "react";
import * as yup from "yup";
import {getData, postData, putData} from "../../../../api/api-instance";
import {STORE_TYPE_URL, STORE_URL} from "../../../../api/api-url-consts";
import {message} from "antd";

export const useStoreForm = (recordId, setCurrentContainer) => {

    const initialValues = {
        userId: 1,
        rating: 0,
        name: '',
        email: '',
        description: '',
        storeType: ''
    };

    const [formData, setFormData] = useState(initialValues);
    const [storeTypeOptions, setStoreTypes] = useState([]);

    const [loading, setLoading] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().nullable(),
        description: yup.string().max(254),
        storeType: yup.number().required()
    });


    useEffect(() => {
        if (recordId) {
            setLoading(true);
            getData(`${STORE_URL}${recordId}`)
                .then(result => {
                    setFormData(result.data);
                    setLoading(false);
                })
                .catch(error => {
                        console.error(error);
                        message.error('Error on load values');
                        setLoading(false);
                    })
        }

        getData(STORE_TYPE_URL)
            .then(result => setStoreTypes(result.data))
            .catch(error => {
                console.error(error);
                message.error('Error on load values');
            })
    }, []);

    const handleSubmit = (formData) => {

        const callBack = (formData.id)
            ? putData(STORE_URL, formData.id, formData)
            : postData(STORE_URL, formData);

        callBack
            .then(() => {
                setCurrentContainer('LIST');
                message.success('Success Saved');
            })
            .catch(error => {
                console.error(error);
                message.error('Error to Save');
            });
    };

    return {schema, formData, handleSubmit, storeTypeOptions, loading};
};
