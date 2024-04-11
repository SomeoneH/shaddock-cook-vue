<script setup>
import { ref, reactive } from "vue";
import BtmNavBar from "@/components/btmNavBar/index.vue";
import Swipe from "@/components/swipe/index.vue";
import { getAssetsFile } from "@/utils/getAssetsFile.js";
const searchStr = ref(""); // 搜索关键字
const unReadMessageCount = ref("3"); // 未读消息的数量
const swipeList = reactive([
  { id: "1", imgUrl: getAssetsFile("banner1.png"), detailUrl: "详情页连接" },
  { id: "2", imgUrl: getAssetsFile("banner2.png"), detailUrl: "详情页连接" },
  { id: "3", imgUrl: getAssetsFile("banner3.png"), detailUrl: "详情页连接" },
]);

const recommendList = reactive([
  {
    id: "1",
    content: "天气变冷，下班回家来碗暖胃酸爽的番茄肥牛汤~！",
    imgUrl: getAssetsFile("recommend1.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "惠妈妈",
      userAvatar: getAssetsFile("avatar1.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
  {
    id: "2",
    content: "能让你多下两碗米饭的鲜虾鸡煲，一定不能错过！",
    imgUrl: getAssetsFile("recommend2.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "悠悠食记",
      userAvatar: getAssetsFile("avatar2.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
  {
    id: "3",
    content:
      "今天这道真是懒人食谱，特别适合冬天不爱下厨的宝宝们，三九寒冬，餐桌上放上这么一道暖锅，暖心暖胃；！",
    imgUrl: getAssetsFile("recommend3.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "懒人食谱",
      userAvatar: getAssetsFile("avatar1.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
  {
    id: "4",
    content:
      "今天这道真是懒人食谱，特别适合冬天不爱下厨的宝宝们，三九寒冬，餐桌上放上这么一道暖锅，暖心暖胃；！",
    imgUrl: getAssetsFile("recommend4.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "懒人食谱",
      userAvatar: getAssetsFile("avatar1.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
  {
    id: "5",
    content:
      "今天这道真是懒人食谱，特别适合冬天不爱下厨的宝宝们，三九寒冬，餐桌上放上这么一道暖锅，暖心暖胃；！",
    imgUrl: getAssetsFile("recommend5.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "懒人食谱",
      userAvatar: getAssetsFile("avatar1.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
  {
    id: "6",
    content:
      "今天这道真是懒人食谱，特别适合冬天不爱下厨的宝宝们，三九寒冬，餐桌上放上这么一道暖锅，暖心暖胃；！",
    imgUrl: getAssetsFile("recommend6.png"),
    detailUrl: "详情页连接",
    userInfo: {
      userName: "懒人食谱",
      userAvatar: getAssetsFile("avatar2.png"),
    },
    isLike: false,
    likeCount: 4396,
  },
]);

function search(event) {
  console.log("search", event);
}

function viewMore() {
  console.log("viewMore");
}

function toRecommendInfo(item) {
  console.log("toRecommendInfo", item);
}

function like(item) {
  item.isLike = !item.isLike;
  if (item.isLike) {
    item.likeCount++;
  } else {
    item.likeCount--;
  }
}
</script>

<template>
  <div class="shaddock_cook_page_home">
    <div class="header_container">
      <div class="header">
        <div class="left">
          <van-icon class-prefix="shaddock-icon" name="plus" />
        </div>
        <div class="middle">
          <van-search
            class="search"
            v-model="searchStr"
            placeholder="请输入食谱、食材"
            @search="search"
          />
        </div>
        <div class="right">
          <van-icon
            class-prefix="shaddock-icon"
            name="message"
            :badge="unReadMessageCount"
            :show-zero="false"
          />
        </div>
      </div>
    </div>
    <div class="content_container">
      <div class="swipe_container">
        <Swipe :list="swipeList"></Swipe>
      </div>
      <div class="recommend_container">
        <div class="title">
          <span class="left">热门推荐</span>
          <span class="right" @click="viewMore">查看更多</span>
        </div>
        <div class="recommend_list">
          <ul class="list_container">
            <li v-for="item in recommendList" :key="item.id" class="item">
              <div class="img">
                <img :src="item.imgUrl" alt="" @click="toRecommendInfo(item)" />
              </div>
              <div class="content">{{ item.content }}</div>
              <div class="bottom_info">
                <div class="user">
                  <span class="avatar">
                    <img
                      :src="item.userInfo.userAvatar"
                      alt=""
                      @click="toRecommendInfo()"
                    />
                  </span>
                  <span class="name">{{ item.userInfo.userName }}</span>
                </div>
                <div class="like">
                  <span class="icon" @click="like(item)">
                    <van-icon v-if="item.isLike" name="like" color="#ff2442" />
                    <van-icon v-else name="like-o" />
                  </span>
                  <span class="count">{{ item.likeCount }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BtmNavBar></BtmNavBar>
  </div>
</template>

<style lang="scss" scoped>
.shaddock_cook_page_home {
  // padding: 0 30px;
  // height: 100vh;
  .header_container {
    height: var(--headerHeight);
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
    z-index: 1000;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--headerHeight);
    }
    .middle {
      flex: 1;
      text-align: center;
      .search {
        padding: 0 24px;
        margin: 0 24px;
        border-radius: 30px;
        background: #f1f1f1;
        :deep(.van-search__content) {
          padding-left: 0;
          background: #f1f1f1;
        }
        :deep(.van-search__field) {
          padding-right: 0;
        }
      }
    }
    .left,
    .right {
      display: flex;
      align-items: center;
      .shaddock-icon {
        font-size: 40px;
      }
    }
  }
  .content_container {
    padding: 88px 30px 98px;
    // overflow-y: auto;
    // height: calc(100% - 88px - 98px);
    .swipe_container {
      margin-top: 30px;
    }
    .recommend_container {
      margin-top: 50px;
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .left {
          font-size: 36px;
        }
        .right {
          font-size: 30px;
          color: #ffbf40;
          cursor: pointer;
        }
      }
      .recommend_list {
        .list_container {
          width: 100%;
          margin: auto;
          column-count: 2;
          column-gap: 30px;
          .item {
            font-size: 28px;
            background-color: #fff;
            margin-bottom: 40px;
            break-inside: avoid;
            .img {
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                vertical-align: bottom;
              }
            }
            .content {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              margin-bottom: 20px;
            }
            .bottom_info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .user {
                display: flex;
                align-items: center;
                .avatar img {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-right: 10px;
                }
                .name {
                  color: #999;
                }
              }
              .like {
                .icon {
                  cursor: pointer;
                  font-size: 28px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
