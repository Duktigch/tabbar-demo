<template>
    <div>
        <MyTable :arr="list">
            <!--方法1： <template v-slot: header></template> -->
            <!-- 方法2： -->
            <template #header>
                <th>序号</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template #body="scope">
                <td>{{scope.row.id}}</td>
                <td>{{scope.row.goods_name}}</td>
                <td>{{scope.row.goods_price}}</td>
                <td class="my-goods-list" >
                    <input 
                    v-if="scope.row.inputVisible" 
                    type="text" class="tag-input form-control" style="width: 100px;" 
                    v-focus 
                    @blur="scope.row.inputVisible = false"
                    @keydown.enter="addFn(scope.row)"
                    v-model="scope.row.inputValue">
                    <button v-else style="display: block;" class="btn btn-primary btn-sm add-tag" @click="scope.row.inputVisible = true">+Tag</button>
                    <span v-for="(str, ind) in scope.row.tags" :key="ind">
                        {{ str }}
                    </span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="removeBtn(scope.row.id)">
                        删除
                    </button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import axios from 'axios';
import MyTable from '../components/MyTable.vue'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        MyTable
    },
    created() {
        this.$axios({
            url: "/api/goods"
        }).then((res) => {
            console.log(res)
            this.list = res.data.data
        }).catch()
    },
    methods: {
        removeBtn(id) {
            let index = this.list.findIndex(obj=>obj.id === id)
            this.list.splice(index, 1)
        },
        addFn(obj) {
            if(obj.inputValue.trim().length === 0) {
                alert('请输入内容')
                return
            }
            obj.tags.push(obj.inputValue)
        }
    }
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>