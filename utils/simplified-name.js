// Removes non-alphanumeric characters and makes it lowercase
export default (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '')
