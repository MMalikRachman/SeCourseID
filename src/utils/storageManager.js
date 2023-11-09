

const KeyName = 'FinalProject'

const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(KeyName, valueToString)
};

const getItem = () => {
    const data = localStorage.getItem(KeyName)
    if(data) {
        return JSON.parse(data)
    }
    return null;
}

const storageManager = {
    get: getItem,
    set: setItem,
}





export default storageManager;