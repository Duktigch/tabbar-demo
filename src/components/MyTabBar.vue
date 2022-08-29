<template>
  <div class="my-tab-bar">
  	<div class="tab-item" 
    v-for="(item, index) in arr" 
    :key="index"
    @click="btn(index,item.componentName)"
    :class="{current: selIndex === index}">
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<!-- 目标：实现tab的切换高亮
    1.遍历循环的每个数组自带index索引
    2.绑定点击事件，将点击的index赋值给默认索引
    3.：class 动态绑定样式，当默认索引= 当前索引返回true
 -->
<script>
export default {
  data() {
    return {
        selIndex: 0
    }
  },
  props: {
    arr: {
        type: Array,
        require: true,
        // 自定义规则 value是arr的数据
        validater(value) {
            if(value.length >= 2 && value.length <= 5) {
                return true
            }else {
                console.error('数据不符合规范')
                return false
            }
        }
    }
  },
  methods: {
    btn(index,cName) {
        this.selIndex = index
        this.$emit('changeSel',cName)
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
    
.current {
  color: #1d7bff;
}
</style>