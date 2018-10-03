// @flow
export const LikeSelectors = {
  getLikes: state => {
    const { selected } = state.candidate
    return selected && state.likes.likes[selected]
  },
  hasLiked: state => {
    const { selected } = state.candidate
    return selected && state.likes.hasLiked[selected]
  }
}
