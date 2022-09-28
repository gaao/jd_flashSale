import Mock from 'mockjs'
import tabList from './json/tab'

// 获取 tab 数据
Mock.mock(
  '/api/tabList',
  'get',
  () => {
    return {
      code: 200,
      msg: 'success',
      data: tabList
    }
  }
)
