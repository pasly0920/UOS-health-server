const { query } = require('express');
var express = require('express');
const { RequestTimeout } = require('http-errors');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/:title', function(req, res, next) {
    api_url(req.params.title).then((value) => {
      request({
        url: value,
        method: 'GET'
      }, function(error, response, _body){
        res.send(JSON.parse(_body).body);
      });
    })
});

module.exports = router;

async function api_url(word){
  const url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'N41Inf4Co88iV2GFmLqoAZCKLjIcn1uV%2Frr3EJM%2F%2BX%2Br0URo3I1cCHat9hnBmeWn0MGmGlgemYyRGNA6STk8Jg%3D%3D'; /* Service Key*/
  queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(word); /* */
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
  queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */
  return url + queryParams;
}
