/*
Array.filter()

Gunakan method filter untuk mengambil data 
sesuai dengan is_eligible_cancel yang diberikan


*/

const data = require("./data_mocks").mocks;
const { data } = raw.api_result_data;

function filterTransaction(isEligible) {
  return data.filter((items) => items.is_eligible_cancel == isEligible);
}

console.log("-------FILTER isEligible---------");
console.log(filterTransaction(false));

/*
find:

Gunakan method filter untuk mengambil data 
sesuai shop_name yang diberikan.

*/

function filterWithShopName(shopName) {
  return data.filter((items) => items.shop_name === shopName);
}
console.log("-------FILTER NAMA TOKO---------");
console.log(filterWithShopName("Apotek Kosambi"));
