//@ts-ignore
import { API_PATH } from '@env';

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/products`,
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

const createProduct = (newItemData: any) => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/products`,
            {
                method: 'POST',
                body: JSON.stringify(newItemData),
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

const deleteProduct = (itemId: any) => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/products/${itemId}`,
            { method: 'DELETE' }
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

const updateProduct = (newItemData: any) => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/products`,
            {
                method: 'POST',
                body: JSON.stringify(newItemData),
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

const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        fetch(
            `${API_PATH}/products/categories`,
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
    getAllProducts,
    getAllCategories,
    createProduct,
    updateProduct,
    deleteProduct
}