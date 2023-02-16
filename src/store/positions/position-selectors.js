export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter(pos => {
    const posCategories = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

    return filters.every((filter) => posCategories.includes(filter));
  })
}
