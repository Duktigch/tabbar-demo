<template>
  <div>
    <MyHeader></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <MyTabBar @changeSel="selFn" :arr="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTable from './components/MyTable.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './view/MyGoodsList.vue'
import MyGoodsSearch from './view/MyGoodsSearch.vue'
import MyUserInfo from './view/MyUserInfo.vue'




export default {
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  name: 'WorkspaceJsonApp',

  data() {
    return {
      tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
      ],
      comName: "MyGoodsList"
    };
  },
  methods: {
    selFn(cName) {
      this.comName = cName
    }
  },
};
</script>

<style scoped>
  .main {
    padding-top: 45px;
    padding-bottom: 50px;
  }
</style>