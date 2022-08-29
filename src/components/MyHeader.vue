<template>
  <div class="my-header" :style="{backgroundColor: background,color}">{{title}}</div>
</template>


<!-- 需求：自定义头部组件，适用于多个项目
      分析：哪些样式可以自定义（背景颜色，字体颜色，标题）
      1.props设置变量，并为表里设置校验规则
      2.通过：style绑定变量值
      3.在父组件传入对应变量值 需要遵循 变量名作为属性名传正确类型的值
      注意： props：[] 只能定义变量
            props: {} 定义变量+定义校验规则
-->
<script>
export default {
  props: {
    // background属于变量名，任意定
    background: String,
    color: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>