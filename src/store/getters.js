function handleLyric(list) {
  const data = list.split(/\n/igs).map((item, i, arr) => {
    const min = parseInt(item.substr(1, 2), 10);
    const sec = parseInt(item.substr(4, 2),10);
    const mill = parseInt(item.substr(7, 3), 10);
    let pre;
    if (i - 1 < 0) {
      pre = 0;
    } else {
      pre = arr[i - 1];
    }
    return {
      pre,
      lyric: item.slice(12),
      content: item,
      time: mill + sec * 1000 + min * 60 * 1000,
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
