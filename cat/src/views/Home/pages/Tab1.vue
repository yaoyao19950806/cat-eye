<template>
  <div class="tab1">
    <ul v-for="(item,index) in list" :key="index" class="uls">
      <li>
        <img :src="item.img" alt />
        <div class="right">
          <span>{{item.nm}}</span>
          <span>观众评:{{item.sc}}</span>
          <span>主演:{{item.star}}</span>
          <span>{{item.showInfo}}</span>
        </div>
        <button
          id="btn"
          class= "{item.globalReleased ? 'active ':''"
        >{{item.globalReleased?'购票':'预售'}}</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // list: []
    };
  },
  computed: {
    ...mapState({
      list: state => state.list
    })
  },
  components: {},
  created() {
    this.bindTodoList();
  },
  methods: {
    ...mapActions(["getList"]),
    bindTodoList() {
      this.getList(); // dispatch提交代码
    }
  }
};
</script>

<style lang="scss">
.uls {
  width: 100vw;
  display: flex;
  flex-direction: column;
  li {
    width: 98vw;
    height: 150px;
    display: flex;
    margin: 5px;
    img {
      width: 20%;
      flex: 1;
    }
    .right {
      margin-left: 5px;
      flex: 6;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      span {
        height: 30px;
        line-height: 30px;
      }
    }
    #btn {
      width: 40px;
      height: 30px;
      // background: orangered;
      margin:50px 20px 0 0 ; 
     .active {
        background: orangered;
      }
     
    }
  }
}
</style>