/**
 * Renames object keys to mapped keys
 * @param {Object} keysMap - Map of old keys to new keys
 * @param {Object} obj - Object to rename keys
 * @returns {Object} - Object with renamed keys
 */
export const renameObjKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  )
