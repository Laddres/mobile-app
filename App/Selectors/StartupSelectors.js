// @flow
export const StartupSelectors = {
  firstTimeOpeningApp: (state: any) => {
    return state.startup.openCount <= 1
  }
}
