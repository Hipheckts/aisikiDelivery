import axios from "axios";
import url from "../../config/url";

const getPayment = (ids: any, ref: string) =>
    axios.post(`${url.baseUrl}/confirm`, {
        ids: ids,
        "payment_ref": ref
    });


export default { getPayment };