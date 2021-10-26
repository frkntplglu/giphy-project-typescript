export const saveToStorage = (keyName: string, keyValue: any): void => {
    localStorage.setItem(keyName, JSON.stringify(keyValue))
}

export const getFromStorage  = (keyName: string) : any | null => {
    const jsonData = localStorage.getItem(keyName);

    if(!jsonData) return null;

    return JSON.parse(jsonData);
}