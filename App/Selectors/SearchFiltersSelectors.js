// @flow
export const SearchFiltersSelectors = {
  isFetching: state => state.searchFilters.fetching,
  getStateInitials: (state: any) => state.searchFilters.state
}
