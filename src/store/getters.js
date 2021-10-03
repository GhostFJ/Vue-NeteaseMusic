const getters = {
  playlist: (state) => state.player.playlist,
  curPlayId: (state) => state.player.curPlayId,
  name: (state) => state.user.name,
};

export default getters;
