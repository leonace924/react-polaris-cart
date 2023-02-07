export const disambiguateLabel = (key, value) => {
  switch (key) {
    case 'category':
      return value.map((val) => `Category ${val}`).join(', ')
    default:
      return value
  }
}
