import { PRODUCTS_API_PATH } from '@env';

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        fetch(
            PRODUCTS_API_PATH,
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
    getAllProducts
}