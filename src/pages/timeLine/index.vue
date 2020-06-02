<template>
  <div class="timeline">
    <my-header></my-header>
    <div class="content">
      <div class="left">
        <!-- <div class="timeline-content">
          <el-timeline>
            <el-timeline-item
              v-for="(item, index) in blogs"
              :key="index"
              :icon="item.icon"
              type="primary"
              color="#ffffff"
              size="large"
              :timestamp="timeTransfrom(item.pubTime)"
              placement="top"
            >
              <el-card>
                <h4 style="cursor: pointer" @click="goDetail(item._id)">{{item.title}}</h4>
                <p>{{item.desc}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>-->
        <section id="conference-timeline">
          <div class="conference-center-line"></div>
          <div class="conference-timeline-content" v-for="(item, index) in blogs" :key="index">
            <div class="timeline-article" @click="goDetail(item._id)">
              <div
                :class="index%2===0?'content-right-container fadeInRight':'content-left-container fadeInLeft'"
                class="animated"
              >
                <div :class="index%2===0?'content-right':'content-left'">
                  <div class="title">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
                  <div class="time">{{timeTransfrom(item.pubTime)}}</div>
                </div>
              </div>
              <div class="meta-icon animated zoomIn">
                <div class="inner">
                  <i class="iconfont" :class="icon[item.category]"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="right">
        <category-card />
        <info-card />
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
// import TimeLineCard from "@/components/TimeLineCard";
import CategoryCard from "@/components/CategoryCard";
import InfoCard from "@/components/InfoCard";
import axios from "@/utils/axios";
import { transformTime } from "@/utils/index";
export default {
  data() {
    return {
      blogs: [],
      icon: {
        test: "icontest",
        Flutter: "iconFlutter",
        Git: "icongit",
        LeetCode: "iconcode"
      }
    };
  },
  created() {
    this.getAllBlog();
  },
  methods: {
    getAllBlog() {
      const _this = this;
      axios
        .get("/api/blogs/getAllBlog")
        .then(function(response) {
          _this.blogs = response.data.blogs;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    timeTransfrom(time) {
      return transformTime(time);
    },
    goDetail(id) {
      this.$router.push({
        path: "/articleDetail/" + id
      });
    }
  },
  components: {
    MyHeader,
    MyFooter,
    // TimeLineCard,
    CategoryCard,
    InfoCard
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>