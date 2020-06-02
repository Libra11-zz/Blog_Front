<template>
  <div class="labels-container">
    <my-header></my-header>
    <div class="label-content">
      <div class="left">
        <div class="mobile-classify-label">
          <mobile-label
            v-for="(item, index) in labels"
            :key="index"
            :url="`/label/${item}`"
            :title="item"
          />
        </div>
        <div class="recently-blog-mobile">
          <span class="recently-title">{{label}}</span>
          <mobile-blog-item
            v-for="(item, index) in Blogs"
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
        <div class="recently-blog">
          <span class="recently-title">{{label}}</span>
          <div class="blog-container">
            <blog-item
              v-for="(item, index) in Blogs"
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
      <div class="right">
        <label-card />
        <info-card />
      </div>
    </div>
    <pagination :totalPages="Math.ceil(total/8)" :changePage="getBlogsByTag"></pagination>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import BlogItem from "@/components/BlogItem";
import LabelCard from "@/components/LabelCard";
import InfoCard from "@/components/InfoCard";
import axios from "@/utils/axios";
import { transformTime } from "@/utils/index";
import MobileBlogItem from "@/components/MobileBlogItem";
import Pagination from "@/components/Pagination";
import MobileLabel from "@/components/MobileLabel";
export default {
  props: ["label"],
  data() {
    return {
      Blogs: [],
      total: 0,
      labels: []
    };
  },
  watch: {
    $route() {
      this.getBlogsByTag();
    }
  },
  created() {
    this.getBlogsByTag();
    this.getAllTags();
  },
  methods: {
    getBlogsByTag(pageNum) {
      const _this = this;
      axios
        .get("/api/blogs/getBlogsByTag", {
          params: {
            tag: this.label,
            pageNum: pageNum || 1
          }
        })
        .then(function(response) {
          _this.Blogs = response.data.data;
          _this.total = response.data.total;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllTags() {
      const _this = this;
      axios
        .get("/api/remote-search/getAllTags")
        .then(function(response) {
          _this.labels = response.data.info || [];
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
    MyHeader,
    MyFooter,
    LabelCard,
    InfoCard,
    BlogItem,
    MobileBlogItem,
    Pagination,
    MobileLabel
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>