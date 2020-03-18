export const getFilteredNew = state => {
  const { news, searchText } = state

  if (!searchText) {
    return news
  }

  return [
    ...news.filter(
      e => e.text.indexOf(searchText) >= 0 || e.title.indexOf(searchText) >= 0
    )
  ]
}
