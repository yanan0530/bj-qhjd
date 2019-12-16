import ajax from "@/api/ajax.js"

export const printList = () => ajax("/admin/print")
export const printList2 = (pageNum,pageSize) => ajax("/admin/print2", {
	pageNum,pageSize
})
export const userList = () => ajax("/admin/person")
export const repeatListApi = () => ajax("/admin/repeat")
export const uploadApi = (data) => ajax("/admin/upload", data, "POST")
export const upListApi = (data) => ajax("/admin/uplist", data, "List")
export const getGoodsListApi = () => ajax("/admin/goodslist")
export const getGoodsList2Api = (pageNum,pageSize,pjbh) => ajax("/admin/goodslist2", {
	pageNum,pageSize,pjbh
})
//更新或者保持delgood
export const saveGood = (data) => ajax("/admin/savegood", data, "POST2")
//删除
export const delGoodApi = (data) => ajax("/admin/delgood", data)
//检查重复
export const inspectpjbhApi = (data) => ajax(`/admin/inspectpjbh`, data, "List")
///searchPj 查看评级编号
export const searchListGoodsApi=(search)=>ajax('/admin/searchPj',{search})

// changetime 修改商品时间
export const changeTimeByIdApi=(id,senddate)=>ajax("/admin/changetime",{id,senddate})