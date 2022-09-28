<template>
  <div class="page">
    <!-- title -->
    <div class="hd-title">
      京东秒杀
    </div>
    <!-- tab -->
    <div class="tab-container">
      <div class="tab-items" v-for="(tab,index) in tabList" :key="index">
        <div class="tab-item" :class="{active:num == tab.state}" @click="tabChange(tab.state)">
          <div>{{tab.title}}</div>
          <div>{{tab.name}}</div>
        </div>
      </div>
    </div>
    <product-list :msg="{num,cardList}"></product-list>
    <van-button class="btn" v-show="btn">到底了</van-button>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue'
import { getTabs } from './api/miaosha'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    ProductList
  },
  setup() {
    const num = ref(0)
    const dataList = reactive({
      tabList: '',
      cardList: ''
    })
    const tabChange = (index) => {
      num.value = index
      dataList.cardList = dataList.tabList[index].cardList
    }
    onMounted(() => {
      console.log('getTabs:', getTabs)
      getTabs().then(res => {
        console.log(res)
        dataList.tabList = res.data.data
        dataList.cardList = dataList.tabList[0].cardList
      })
    })
    return {
      num,
      ...toRefs(dataList),
      tabChange,
      btn: 'false'
    }
  }
}
</script>

<style scoped>
.page {
  background: linear-gradient(red, #fff);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hd-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 20px;
  letter-spacing: 0.2rem;
}

.tab-container {
  display: flex;
}

.tab-items {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.tab-item {
  color: #fff;
  margin: 5px 10px;
  font-size: .7rem;
  font-weight: bold;
}

.active {
  font-size: .8rem;
  color: #ffb133;
}

.btn {
  display: none;
}
</style>
