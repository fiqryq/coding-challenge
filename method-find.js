/*
find:

Gunakan method find untuk mengambil data 
dengan 

order_id = 869193144

*/

const raw = require("./data_mocks").mocks;
const { data } = raw.api_result_data;

function findWithOrderId(orderId) {
  return data.find((shop) => shop.order_id == orderId);
}

console.log(findWithOrderId(869193144));

console.log("-------------------");

/*
find:

Gunakan method find untuk mengambil data 
dengan 

shop_id = 543549

*/

function findWithShopId(shopId) {
  return data.find((shop) => shop.shop_id == shopId);
}

console.log(findWithShopId(543549));
