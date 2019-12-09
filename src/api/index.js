import ajax from './ajax'
// 获取经纬度
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
