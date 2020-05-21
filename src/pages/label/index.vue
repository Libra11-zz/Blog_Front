<template>
  <div class="labels-container">
    <my-header></my-header>
    <div class="label-content">
      <div class="left">
        <div class="mobile-classify">
          <mobile-label
            v-for="(item, index) in categorys"
            :key="index"
            :url="`/label/${item}`"
            :icon="`${icon[item]}`"
            :title="item"
          />
        </div>
        <div class="recently-blog-mobile">
          <span class="recently-title">最近</span>
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
          <span class="recently-title">最近</span>
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
        <category-card />
        <info-card />
      </div>
    </div>
    <pagination :totalPages="Math.ceil(total/8)" :changePage="getBlogsByCategory"></pagination>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import BlogItem from "@/components/BlogItem";
import CategoryCard from "@/components/CategoryCard";
import InfoCard from "@/components/InfoCard";
import axios from "@/utils/axios";
import { transformTime } from "@/utils/index";
import MobileBlogItem from "@/components/MobileBlogItem";
import Pagination from "@/components/Pagination";
import MobileLabel from "@/components/MobileLabel";
export default {
  props: ["category"],
  data() {
    return {
      Blogs: [],
      total: 0,
      categorys: [],
      icon: {
        test: "icontest",
        Flutter: "iconFlutter",
        Git: "icongit"
      }
    };
  },
  watch: {
    $route() {
      this.getBlogsByCategory();
    }
  },
  created() {
    this.getBlogsByCategory();
    this.getAllCategory();
  },
  methods: {
    getBlogsByCategory(pageNum) {
      const _this = this;
      axios
        .get("/api/blogs/getBlogsByCategory", {
          params: {
            category: this.category,
            pageNum: pageNum || 1
          }
        })
        .then(function(response) {
          console.log(response.data.data);
          _this.Blogs = response.data.data;
          _this.total = response.data.total;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllCategory() {
      const _this = this;
      axios
        .get("/api/blogs/getAllCategory")
        .then(function(response) {
          _this.categorys = response.data.data || [];
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
    CategoryCard,
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