// fix form style for json :page3
  $('form') submit(function(){
  var data = $('form').serializeArray();
  data = parseJson(data);
  $.ajax({
    type:          'post',
    dataType:      'json',
    contentType:   'application/json',
    scriptCharset: 'utf-8',
    data:          JSON.stringify(data)
  })
})

var parseJson = function(data) {
  var returnJson = {};
  for (idx = 0; idx < data.length; idx++) {
    returnJson[data[idx].name] = data[idx].value
  }
  return returnJson;
}
