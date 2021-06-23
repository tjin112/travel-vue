<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "~@/assets/styles/mixins.less";
.title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
    .item-img {
      width: 100%;
    }
  }
  .item-info { 
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      .ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      .ellipsis;
    }
    .item-btn {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
