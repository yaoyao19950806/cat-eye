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
  li{
    width: 98vw;
    height: 150px;
    display: flex;
    margin: 5px;
    img{
      flex: 2;
    }
    .right{
      margin-left:5px; 
      flex: 6;
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  }
}
</style>