<template>
  <div id="article">
    <my-header></my-header>
    <div class="article-content">
      <div class="left">
        <span class="title animated rollIn">{{title}}</span>
        <ul class="label animated zoomInUp">
          <li class="date">
            <i class="iconfont iconshizhong"></i>
            {{timeTransfrom(pubTime)}}
          </li>
          <li class="update">
            <i class="iconfont iconUpdate"></i>
            {{timeTransfrom(upTime)}}
          </li>
          <li class="labels">
            <i class="iconfont iconlabel"></i>
            {{category}}
          </li>
        </ul>
        <div class="image">
          <img :src="headerPic" alt width="100%" />
        </div>
        <div class="detail">
          <div v-html="markdown(content)"></div>
        </div>
        <Comments :articleId="id" />
      </div>
      <div class="right">
        <category-card />
        <info-card />
        <ul class="list">
          <li
            v-for="(item, index) in hs"
            :key="index"
            class="catalog-list"
            :style="`padding-left: ${(parseFloat(item.tagName[1])-1)*20}px`"
          >
            <a :href="`#heading-${index}`" v-html="item.innerHTML"></a>
          </li>
        </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Comments from "@/components/Comments";
import MarkdownIt from "markdown-it";
import axios from "@/utils/axios";
import CategoryCard from "@/components/CategoryCard";
import InfoCard from "@/components/InfoCard";
import { transformTime } from "@/utils/index";
import hljs from "highlight.js";
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import "highlight.js/styles/atom-one-dark.css";
export default {
  layout: "other",
  data() {
    return {
      hs: [],
      id: this.$route.params.id,
      title: "",
      pubTime: "",
      upTime: "",
      category: "",
      content: "",
      headerPic: "",
      views: 0,
      commentsLength: 0
    };
  },
  mounted() {
    this.fixedTop();
    this.getBlogById(this.id);
    setTimeout(() => {
      this.listAndAnchor();
    }, 1000);
  },
  methods: {
    // generator markdown catalog
    listAndAnchor() {
      let markdownDiv = document.querySelector(".detail>div");
      this.hs = Array.from(markdownDiv.querySelectorAll("h1, h2"));
      for (let i = 0; i < this.hs.length; i++) {
        const item = this.hs[i];
        item.id = `heading-${i}`;
      }
    },
    // apply catalog fixed top
    fixedTop() {
      var obj = document.querySelector(".list");
      var ot = obj.offsetTop;
      document.onscroll = function() {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed", st >= ot + 20 ? "fixed" : "");
      };
    },
    getBlogById(id) {
      const _this = this;
      axios
        .get("/api/blogs/getBlogById", {
          params: {
            id: id
          }
        })
        .then(function(response) {
          let data = response.data.blog[0];
          _this.title = data.title;
          _this.pubTime = data.pubTime;
          _this.upTime = data.upTime;
          _this.category = data.category;
          _this.content = data.content;
          _this.views = data.meta.views;
          _this.commentsLength = data.meta.Comments;
          _this.headerPic = data.headerPic;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    timeTransfrom(time) {
      return transformTime(time);
    },
    markdown(content) {
      var md = new MarkdownIt({
        highlight: function(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {
              return null;
            }
          }

          return ""; // use external default escaping
        }
      });
      var result = md.render(content);
      return result;
    }
  },
  components: {
    Comments,
    InfoCard,
    CategoryCard,
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>