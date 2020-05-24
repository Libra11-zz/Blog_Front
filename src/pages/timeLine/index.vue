<template>
  <div class="timeline">
    <my-header></my-header>
    <div class="content">
      <div class="left">
        <div class="timeline-content">
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
                <h4>{{item.title}}</h4>
                <p>{{item.desc}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
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
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ],
      blogs: []
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
          console.log(response.data.blogs);
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
    // TimeLineCard,
    CategoryCard,
    InfoCard
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>