export const getFilteredNews = state => {
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

export const getFilteredUnapprovedNews = state => {
  const { unapprovedNews, searchText } = state

  if (!searchText) {
    return unapprovedNews
  }

  return Object.keys(unapprovedNews).reduce((acc, id) => {
    if (
      unapprovedNews[id].text.indexOf(searchText) >= 0 ||
      unapprovedNews[id].title.indexOf(searchText) >= 0
    ) {
      return {
        ...acc,
        [id]: unapprovedNews[id]
      }
    }
    return acc
  }, {})
}
