<template>
  <div class="main-box">
    <div class="card-box" v-for="(item,index) in cardList" :key="index">
      <!-- 左侧主图 -->
      <aside>
        <!-- {{item.img}} -->
        <img :src="item.img" class="card-img" />
      </aside>
      <!-- 右侧内容 -->
      <ul class="card-right">
        <div class="item-title">
          <div class="card-cite">{{item.title}}</div>
          <small class="card-small">{{item.name}}</small>
        </div>
        <div class="item-bottom">
          <li class="item-low-price">
            <div>历史最低价</div>
          </li>
          <div class="item-desc">
            <div class="price">
              <b class="item-price">{{item.price}}</b>
              <del class="item-del">{{item.oldPrice}}</del>
            </div>
            <!-- 抢购 -->
            <div class="item-progress" v-if="data === 0">
              <button class="my-btn">去抢购</button>
              <div class="btn-progress">
                <van-progress class="progress" color="#ffffff" stroke-width="5" :show-pivot="false"
                  :percentage="item.progress">
                </van-progress>
                <div class="percent">{{item.progress}}%</div>
              </div>
            </div>
            <!-- 等待抢购 -->
            <div v-else>
              <van-button class="btn-remind" type="warning" disabled>等待抢购</van-button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  name: 'ProductList',
  props: {
    msg: Object
  },
  setup(props) {
    const data = ref(props.msg.num)
    const cardList = ref(props.msg.cardList)
    console.log(cardList)
    // watch 监听 props
    watch(props, (newProps) => {
      data.value = newProps.msg.num
      cardList.value = newProps.msg.cardList
    })
    return {
      data,
      cardList
    }
  }
}
</script>
<style lang="scss" scoped>
.main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.card-box {
  background-color: #fff;
  margin: 8px 20px;
  border-radius: 12px;
  display: flex;
}

.card-img {
  width: 120px;
  margin: 16px
}

.card-right {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}

.item-title {
  // width: 90%;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  // overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  margin: 16px 16px 16px 0;

  .card-cite {
    font-size: 14px;
    font-weight: bold;
  }

  .card-small {
    color: #ff3333;
  }
}

.item-low-price {
  font-size: .6rem;

  >div {
    color: #666;
    // background-color: #ddd;
  }
}

.item-desc {
  display: flex;
  justify-content: space-between;
  margin: 0 16px 16px 0;

  .price {
    display: flex;
    flex-direction: column;

    .item-price {
      color: #ff3333;
    }

    .item-del {
      font-size: 0.7rem;
    }
  }

  .item-progress {
    background-color: #ff3333;
    padding: 2px 8px;
    border-radius: 4px;
    width: 48%;
    display: flex;
    flex-direction: column;

    .my-btn {
      font-size: .8rem;
      border: none;
      background-color: transparent;
      color: #fff;
    }

    .btn-progress {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .progress {
        width: 80%;

      }

      .percent {
        margin-left: 4px;
        color: #fff;
        font-size: .5rem;
      }
    }
  }
}

.btn-remind {
  border-radius: 4px;
}
</style>
