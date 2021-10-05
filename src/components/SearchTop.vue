<template>
  <div class="search-top">
    <!-- top -->
    <div class="search-nav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-zuojiantouzhixiangzuojiantou"></use>
        </svg>
      </div>

      <div class="right">
        <input
          type="text"
          autofocus
          v-model="searchContent"
          :placeholder="placeholder"
          @keydown.enter="saveKeyWord"
        >
      </div>
    </div>
    <!-- 历史 -->
    <div class="history">
      <div class="left">
        历史
      </div>
      <div class="right">
        <div
          class="keyword-item"
          v-for="(item, id) in keywords"
          :key="id"
          @click="(searchContent = item) && saveKeyWord()"
        >
          {{item}}
        </div>
      </div>
    </div>
    <!-- 搜索结果显示 -->
    <div class="list-show">
      <!-- 顶部 -->
      <div class="main-top">
      <div class="left-side">
        <div class="text">
          <div class="title">单曲</div>
        </div>
      </div>
      <div class="right-side">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放</span>
      </div>
    </div>
    <!-- 主体 -->
      <div class="play-item" v-for="(item, id) in songs" :key="id">
        <div class="left">
          <div class="content">
            <div class="title">
              {{item.name.length > 10 ? item.name.slice(0,10)+'...' : item.name }}
            </div>
            <div class="author">
              <span class="tag">SQ</span>
              <span class="songer">
                {{item.artists[0].name}}
              </span>
               -
              <span class="name">
                 {{item.album.name.length > 10 ?
                 item.album.name.slice(0, 10)+'...' :
                 item.album.name}}
              </span>
            </div>
          </div>
        </div>

        <div class="right">
          <svg class="icon" aria-hidden="true" @click="setPlay(item, id)">
            <use xlink:href="#icon-icon-bofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sandian"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  onBeforeMount, reactive, toRefs, computed,
} from 'vue';
import { useStore } from 'vuex';
import { getSearch } from '@/apis/index.js';

export default {
  props: {

  },
  setup(props) {
    const state = reactive({
      placeholder: '周杰伦',
      searchContent: '',
      keywords: [],
      songs: [],
    });

    const store = useStore();
    const playlist = computed(() => store.getters.playlist);

    onBeforeMount(() => {
      state.keywords = localStorage.keywords ? JSON.parse(localStorage.keywords) : [];
    });

    const saveKeyWord = async () => {
      if (state.searchContent === '') {
        return;
      }

      state.keywords.push(state.searchContent);
      state.keywords = Array.from(new Set(state.keywords));
      if (state.keywords.length > 10) {
        state.keywords.shift();
      }
      localStorage.keywords = JSON.stringify(state.keywords);
      const res = await getSearch(state.searchContent);
      console.log(res);
      state.songs = res.result.songs;
    };

    const setPlay = (item, id) => {
      const data = {
        ...item,
        al: {
          ...item.album,
          picUrl: item.album.artist.img1v1Url,
        },
      };
      store.commit('player/PUSH_PLAYLIST', data);
      store.commit('player/SET_PLAY_ID', playlist.value.length - 1);
    };

    return {
      ...toRefs(state),
      saveKeyWord,
      setPlay,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-top {
  width: 7.5rem;
  height: calc(100vh - 1.2rem);
  padding: 0 0.2rem;
  .search-nav {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 0.5rem;
    height: 1.2rem;
    width: 100%;
    padding: 0 0.4rem;

    .back {
      color: #fff;
      display: flex;

      .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: #555;
      }
    }
    .right {
      flex: 1;
      padding: 0 0 0 0.3rem;
      input {
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
        width: 100%;
      }
    }
  }

  .history {
    display: flex;
    margin-top: 1.2rem;
    .left {
      margin-left: 0.2rem;
      width: 1.2rem;
      height: 0.4rem;
      font-weight: 900;
    }
    .right {
      color: #666;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .keyword-item {
        background-color: #eee;
        height: 0.4rem;
        line-height: 0.4rem;
        padding: 0 0.2rem;
        border-radius: 0.2rem;
        margin-right: 0.2rem;
      }
    }
  }

  .list-show {
    width: 95%;
    padding: 0 0.2rem;
    background-color: #fff;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    margin-top: 0.4rem;
    position: fixed;
    top: 1.3rem;
    bottom: 1.2rem;
    overflow: scroll;
    .main-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      margin-top: 0.2rem;
      .left-side {
        display: flex;
        align-items: center;
        .icon {
          width: 0.4rem;
          height: 0.4rem;
        }
        .text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 0.3rem;
          .title {
            font-size: 0.35rem;
            font-weight: 900;
          }
          .numbers {
            font-size: 0.25rem;
            color: #999;
          }
        }
      }
      .right-side {
        width: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
      }
    }
    .play-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      margin-bottom: 0.2rem;
      border-top: 0.1px solid #eee;
      .left {
        display: flex;
        align-items: center;
        .title {
          font-size: 0.3rem;
          // font-weight: 500;
        }
        .content {
          margin-left: 0.4rem;
          width: 5rem;
          overflow: hidden;
          .tag {
            font-size: 0.2rem;
            font-weight: bold;
            color: orangered;
            border: 1px solid orangered;
            border-radius: 0.1rem;
            margin-right: 0.1rem;
          }
          .name {
            color: #888;
          }
          .songer {
            color: royalblue;
          }
        }
      }
      .right {
        .icon {
          width: 0.4rem;
          height: 0.4rem;
          margin: 0 0.1rem;
        }
      }
    }
  }
}
</style>
