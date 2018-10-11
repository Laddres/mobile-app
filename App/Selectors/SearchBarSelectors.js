// @flow
export const SearchBarSelectors = {
  getQuery: (state: any) => state.searchBar.query,
  fetchSuggestions: (state: any) => {
    return []
  }
}
