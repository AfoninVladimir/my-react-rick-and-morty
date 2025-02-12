export function localStorageGet<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export function localStorageSet<T>(key: string, value: T) {
    return localStorage.setItem(key, JSON.stringify(value));
}