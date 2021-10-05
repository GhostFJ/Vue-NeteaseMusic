function handleLyric(list) {
  const data = [];
  list.split(/\n/igs).reduce((pre, cur) => {
    const min = parseInt(cur.substr(1, 2), 10);
    const sec = parseInt(cur.substr(4, 2), 10);
    const mill = parseInt(cur.substr(7, 3), 10);
    let time = mill + sec * 1000 + min * 60 * 1000;
    if (cur === '') {
      time = pre;
    }

    data.push({
      pre,
      lyric: cur.slice(11),
      content: cur,
      time,
    });
    return time;
  }, 0);
  return data;
}

const getters = {
  playlist: (state) => state.player.playlist,
  curPlayId: (state) => state.player.curPlayId,
  lyric: (state) => handleLyric(state.player.lyric),
  name: (state) => state.user.name,
};

export default getters;
