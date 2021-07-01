
const MAX_LENGTH = 1021;
const OUTPUT_LENGTH = 1024;

export const truncate = (str: string) => {
    if (str.length > OUTPUT_LENGTH) {
        return str.substring(0, MAX_LENGTH) + '...'
    }
    return str;
}