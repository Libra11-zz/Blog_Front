<template>
  <div id="blog">
    <my-header></my-header>
    <div class="main">
      <div class="blog-content">
        <div class="mobile-classify">
          <!-- <mobile-label url="/searchDetail" icon="iconblockchain" title="Blockchain" />
        <mobile-label url="/searchDetail" icon="icongo" title="Go" />
        <mobile-label url="/searchDetail" icon="iconFlutter" title="Flutter" />
        <mobile-label url="/searchDetail" icon="iconjava-script" title="JavaScript" />
        <mobile-label url="/searchDetail" icon="iconReact" title="React" />
        <mobile-label url="/searchDetail" icon="iconVue" title="Vue" />
        <mobile-label url="/searchDetail" icon="iconnodejs" title="Node" />
        <mobile-label url="/searchDetail" icon="iconcss" title="Css" />
          <mobile-label url="/searchDetail" icon="icondatabase" title="Database" />-->
        </div>
        <div class="left">
          <router-link :to="`/articleDetail/${firstBlog._id}`" class="picLink">
            <img :src="firstBlog.headerPic" alt class="picture" />
          </router-link>
          <div class="detail animated slow bounceInLeft">
            <div class="title-label">
              <span class="title">{{firstBlog.title}}</span>
              <span class="label">
                <i class="iconfont iconlabel"></i>
                {{firstBlog.category}}
              </span>
            </div>
            <div class="content">{{firstBlog.desc}}</div>
            <div class="bottom-content">
              <div class="bottom-left">
                <span class="time">
                  <i class="iconfont iconshizhong"></i>
                  {{timeTransfrom(firstBlog.upTime)}}
                </span>
                <span class="likes">
                  <i class="iconfont iconlabel"></i>
                  {{firstBlog.category}}
                </span>
              </div>
              <router-link class="bottom-right" :to="`/articleDetail/${firstBlog._id}`">
                阅读更多
                <i class="iconfont icon-Right-Arrow"></i>
              </router-link>
            </div>
          </div>
          <div class="recently-blog-mobile">
            <span class="recently-title">最近</span>
            <mobile-blog-item
              v-for="(item, index) in recentBlogs"
              :key="index"
              :source="item.headerPic"
              :title="item.title"
              :url="item._id"
              :content="item.desc"
              :id="item._id"
              :time="timeTransfrom(item.upTime)"
              :category="item.category"
            />
          </div>
        </div>
        <div class="right">
          <category-card />
          <info-card />
        </div>
      </div>
      <div class="recently-blog">
        <span class="recently-title">最近</span>
        <div class="blog-container">
          <blog-item
            v-for="(item, index) in recentBlogs"
            :key="index"
            :source="item.headerPic"
            :title="item.title"
            :url="item._id"
            :content="item.desc"
            :id="item._id"
            :time="timeTransfrom(item.upTime)"
            :category="item.category"
          />
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MobileBlogItem from "@/components/MobileBlogItem";
import BlogItem from "@/components/BlogItem";
import axios from "@/utils/axios";
import CategoryCard from "@/components/CategoryCard";
import InfoCard from "@/components/InfoCard";
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import { transformTime } from "@/utils/index";
export default {
  data() {
    return {
      recentBlogs: [],
      firstBlog: {}
    };
  },
  created() {
    this.getRecentBlogs();
  },
  methods: {
    getRecentBlogs() {
      const _this = this;
      axios
        .get("/api/blogs/getRecentBlog")
        .then(function(response) {
          _this.recentBlogs = response.data.blogs;
          _this.firstBlog = response.data.blogs[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    timeTransfrom(time) {
      return transformTime(time);
    }
  },
  components: {
    MobileBlogItem,
    BlogItem,
    CategoryCard,
    InfoCard,
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>