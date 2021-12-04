const request = require('request');

// const url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
// let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'N41Inf4Co88iV2GFmLqoAZCKLjIcn1uV%2Frr3EJM%2F%2BX%2Br0URo3I1cCHat9hnBmeWn0MGmGlgemYyRGNA6STk8Jg%3D%3D'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent('새송이'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
// queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, _body) {
//     console.log('Status', response.statusCode);
//     console.log( _body);
//     console.log(_body.header);
// });
async function api_url(word){
    const url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'N41Inf4Co88iV2GFmLqoAZCKLjIcn1uV%2Frr3EJM%2F%2BX%2Br0URo3I1cCHat9hnBmeWn0MGmGlgemYyRGNA6STk8Jg%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(word); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */
    return url + queryParams;
}

async function api_request(_url){
  request({
      url: _url,
      method: 'GET'
  }, function (error, response, _body) {
      console.log(_body);
  });
}

api_url("새송이").then((value) => {
    api_request(value);
})