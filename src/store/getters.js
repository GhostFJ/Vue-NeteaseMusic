function handleLyric(list) {
  const data = list.split(/\n/igs).map((item) => {
    const min = item.substr(1, 2);
    const sec = item.substr(4, 2);
    const mill = item.substr(7, 3);
    return {
      lyric: item.slice(12),
      content: item,
      time: parseInt(mill, 10) + parseInt(sec, 10) * 1000 + parseInt(min, 10) * 60 * 1000,
    };
  });
  console.log(data);
  return data;
}

const getters = {
  playlist: (state) => state.player.playlist,
  curPlayId: (state) => state.player.curPlayId,
  lyric: (state) => handleLyric(state.player.lyric),
  name: (state) => state.user.name,
};

export default getters;
