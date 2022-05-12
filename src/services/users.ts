/* Environment variables *///@ts-ignore
import { API_PATH } from '@env';

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/users`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(async response => {
            const RESPONSE: any = await response.json();
            if (!RESPONSE.errors) {
                resolve(RESPONSE);
            } else {
                reject(RESPONSE);
            }
        })
            .catch(error => console.error(error));
    });
};

export {
    getAllUsers
}