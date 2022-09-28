import instance from './request'

export const getTabs = () => {
  return instance({
    url: '/tabList',
    method: 'Get'
  })
}
