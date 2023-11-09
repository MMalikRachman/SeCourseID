import axios from "axios";

export const httpService = axios.create({
    baseURL: 'https://654a3a78e182221f8d52c4e0.mockapi.io/api/v1/'
})

import storageManager from "./storageManager"

const addCourse = (payload) => {
    const currItem = storageManager.get();

    if(currItem !== null) {
        const combinedItem = [...currItem, payload]
        storageManager.set(combinedItem);
    } else {
        storageManager.set([payload])
    }

    return {
        data: payload,
    }
}

const getCourses = () => {
    const result = storageManager.get();
    const response = {
        data: result !== null ? result : [],
    }

    return response;
}

const updateCourse = (courseId, payload) => {
    const listCourses = storageManager.get();
    const updatedCourse = listCourses.map((item) => {
        if(item.id === courseId) {
            return {
                ...item,
                ...payload
            }
        }
        return item
    })
    storageManager.set(updatedCourse)
    return {
        data: payload
    }
}

const deleteCourse = (courseId) => {
    const listCourses = storageManager.get();
    const newData = listCourses.filter((item) => item.id !== courseId )

    storageManager.set(newData)
}

const addProductToCart = (product) => {
    let existingProducts = getItem() || [];
    existingProducts.push(product);
    setItem(existingProducts);
}

const getProductsFromCart = () => {
    return getItem() || [];
}

const courseService = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    addProductToCart,
    getProductsFromCart
}

export default courseService;