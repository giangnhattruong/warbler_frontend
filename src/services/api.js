import axios from "axios";

// export function apiCall(method, path, data) {
//     return new Promise((resolve, reject) => {
//         return axios[method](path, data)
//             .then(res => {
//                 return resolve(res.data)
//             })
//             .catch(err => {
//                 return reject(err.response.data.error);
//             })
//     })
// }

export async function apiCall(method, path, data) {
    try{
        const res = await axios[method](path, data);
        return res.data;
    } catch(err) {
        return err.response.data.error;
    }
}