


const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeWords = (str: string) => str.split(' ').map(capitalize).join(' ');

export { capitalize, capitalizeWords };