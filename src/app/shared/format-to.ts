export const removeNonDigits = (value: string): string => {
    if (typeof value !== 'string') {
        return null;
    }
    return value.replace(/\D/g, '');
}