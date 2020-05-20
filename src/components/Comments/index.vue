<template>
  <div class="commentsContainer">
    <div class="comments">
      <form class="inputContainer">
        <input type="text" v-model="name" placeholder="昵称:" />
        <input type="email" v-model="email" placeholder="邮箱:" />
        <input type="url" v-model="avatar" placeholder="头像URL:" />
      </form>
      <div class="textareaContainer">
        <textarea ref="textarea" v-model="content" id="editor" :placeholder="placeholder" />
      </div>
      <emoji-picker @emoji="insert" :search="search">
        <div
          slot="emoji-invoker"
          slot-scope="{ events: { click: clickEvent } }"
          @click.stop="clickEvent"
        >
          <div class="expressionContainer">
            <div class="expression">表情</div>
          </div>
          <!-- <button type="button">open</button> -->
        </div>
        <div slot="emoji-picker" slot-scope="{ emojis, insert }">
          <div>
            <div>
              <div v-for="(emojiGroup, category) in emojis" :key="category">
                <h5>{{ category }}</h5>
                <div class="emojiContainer">
                  <span
                    v-for="(emoji, emojiName) in emojiGroup"
                    :key="emojiName"
                    @click="insert(emoji)"
                    :title="emojiName"
                  >{{ emoji }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </emoji-picker>
      <!-- <div class="expressionContent"></div> -->
      <div class="replyContainer">
        <div class="reply" @click="comment">回复</div>
      </div>
    </div>
    <div class="commentNum">{{commentLength}} 评论</div>
    <div class="commentContentContainer" v-for="(item, index) in comments" :key="index">
      <div class="firstReply">
        <div class="commentsDetail">
          <div class="left">
            <div class="avatar">
              <img :src="item.avatar" alt class="avatar-img" />
            </div>
            <div class="nameAndTime">
              <div class="name">{{item.name}}</div>
              <div class="time">{{item.createTime}}</div>
            </div>
          </div>
          <div class="right" @click="reply(item.name, item._id)">回复</div>
        </div>
        <div class="commentReply">{{item.content}}</div>
      </div>
      <div class="otherReply" v-for="(i, index) in item.otherComment" :key="index">
        <div class="commentsDetail">
          <div class="left">
            <div class="avatar">
              <img :src="i.avatar" alt class="avatar-img" />
            </div>
            <div class="nameAndTime">
              <div class="name">{{i.name}}</div>
              <div class="time">{{i.createTime}}</div>
            </div>
          </div>
          <div class="right" @click="reply(i.name, item._id)">回复</div>
        </div>
        <div class="commentReply">
          <span style="color: #1abc9c; font-style: italic">@{{i.replyer}}&nbsp;&nbsp;</span>
          <span>{{i.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiPicker from "vue-emoji-picker";
import axios from "@/utils/axios";
export default {
  props: ["articleId"],
  data() {
    return {
      name: "",
      avatar: "",
      content: "",
      search: "",
      email: "",
      placeholder:
        "如果你想显示自己的头像，请填写头像URL,否则，会显示默认头像呦！！！，另外，输入邮箱就可以收到回复呦！！！",
      comments: [],
      commentLength: 0,
      isOtherReply: false,
      replyer: "Blogger",
      commentId: ""
    };
  },
  created() {
    this.getComments(this.articleId);
  },
  methods: {
    insert(emoji) {
      this.content += emoji;
    },
    comment() {
      let replyer = this.replyer;
      if (this.isOtherReply) {
        this.otherReply(replyer);
        this.isOtherReply = false;
        this.replyer = "Blogger";
        this.placeholder =
          "如果你想显示自己的头像，请填写头像URL,否则，会显示默认头像呦！！！，另外，输入邮箱就可以收到回复呦！！！";
      } else {
        this.publishComment(replyer);
      }
    },
    reply(replyer, id) {
      this.isOtherReply = true;
      this.replyer = replyer;
      this.$refs.textarea.focus();
      this.placeholder = `@${replyer}`;
      this.commentId = id;
    },
    publishComment(replyer) {
      const _this = this;
      if (!this.content) {
        return;
      }
      axios
        .post("/api/comments/publishComment", {
          article_id: this.articleId,
          name: this.name || "无名氏",
          content: this.content,
          email: this.email,
          replyer: replyer,
          avatar:
            this.avatar ||
            "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg"
        })
        .then(function(response) {
          _this.content = "";
          _this.getComments(_this.articleId);
          console.log("评论成功");
          console.log(response);
        })
        .catch(function(error) {
          console.log("评论失败");
          console.log(error);
        });
    },
    getComments(id) {
      const _this = this;
      axios
        .get("/api/comments/getComments", {
          params: {
            id: id
          }
        })
        .then(function(response) {
          let comments = response.data.comments;
          _this.comments = comments;
          console.log(comments);
          _this.commentLength = comments.length;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    otherReply(replyer) {
      const _this = this;
      axios
        .post("/api/comments/replyComment", {
          id: this.commentId,
          name: this.name || "无名氏",
          content: this.content,
          replyer: replyer,
          email: this.email,
          avatar:
            this.avatar ||
            "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg"
        })
        .then(function(response) {
          _this.content = "";
          console.log("回复成功");
          _this.getComments(_this.articleId);
          console.log(response);
        })
        .catch(function(error) {
          console.log("回复失败");
          console.log(error);
        });
    }
  },
  components: {
    EmojiPicker
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>