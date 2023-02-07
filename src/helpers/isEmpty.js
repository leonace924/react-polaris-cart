export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length === 0
  } else {
    return value === '' || value == null
  }
}
