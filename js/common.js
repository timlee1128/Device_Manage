function getViewportSize(w) {
  var w = w || window;
  if (w.innnerWidth !== null) return {w: w.innerWidth, h: w.innerHeight};
  var d = w.document;
  if (document.compatMode == "CSS1Compat") {
    return {
      w: d.documentElement.clientWidth,
      h: d.documentElement.clientHeight
    };
  }
  return {w: d.body.clientWidth, h: d.body.clientHeight};
}

function transformRatio(coord, ratio) {
  var newCoord = [];
  for (var i = 0, len = coord.length; i < len; i++) {
    if (i === 0 || i === 2 || i === 4 || i === 6) {
      newCoord.push(Math.round(coord[i] * ratio.w));
    } else {
      newCoord.push(Math.round(coord[i] * ratio.h));
    }
  }
  return newCoord;
}

function size(coord) {
  return [coord[2] - coord[0], coord[3] - coord[1]];
}

function fontSize(size, ratio) {
  return Math.round(parseInt(size * (ratio.w + ratio.h) / 2));
}

function transformCoToStr(coord) {
  var str = '', space = ', ';
  for (var i = 0, len = coord.length; i < len; i++) {
    if (i === len - 1) {
      space = '';
    }
    str += coord[i] + space;
  }
  return str;
}

function getCurrentTime() {
  var date = new Date;
  Y = date.getFullYear() + '-';
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); 
}

function changeTv(rtmp) {
  var arr = rtmp.name.split('&');

  var flash = '<embed type="application/x-shockwave-flash" src="/static/flash/player.swf" id="f4Player" width="100%" height="100%" wmode="opaque"'
      + 'flashvars="skin=/static/flash/skins/mySkin.swf&stream=' + rtmp.rtmp_url + '&streamname='+ arr[0] + '?code=' + arr[1] + '&autoplay=1" allowscriptaccess="always" allowfullscreen="true" bgcolor="#000000"/>' 
      + '<noembed>' 
      + '<a href="http://get2.adobe.com/cn/flashplayer/otherversions/">请下载更新 flash!</a>'
      + '</noembed>';  

  $('#flash').html(flash);
}

function addOption(data) {
  var doorOptions = '';
  for (var i = 0, len = data.cameras.length; i < len; i++) {
    doorOptions += '<option value=' + data.cameras[i] + '>' + data.cameras[i] + '</option>';
  }
  $('#doors').html(doorOptions);
}
