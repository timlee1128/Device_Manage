$(function() {
  // Dynamic style
  resize();
  window.onresize = function() {
    resize();
  }
  function resize() {
    var viewport = getViewportSize();
    var mapRatio = {
      w: viewport.w / 1920,
      h: viewport.h / 1080
    };

    var rem = 100 * mapRatio.h;
    $('#bg, #pop_up').css({
      "width": viewport.w + 'px',
      "height": viewport.h + 'px'
    });
    document.documentElement.style.fontSize = rem + 'px';
  }

  // Normal
  $('#shift_zone').click(function() {
    $('#pop_up').show();
  });
  $('#pop_up_shade, #pop_up_content i').click(function() {
    $('#pop_up').hide();
  })

  // No map junge
  var noMap = false;
  if (noMap) {
    $('#map').attr('src', '../img/no_map.png');
    $('#no_map_tip').show();
  } else {
    $('#map').attr('src', '../img/map.png');
    $('#no_map_tip').hide();
    $('#edit_device_co').css({
      "borderColor": "#59abff",
      "color": "#70d1ff",
      "backgroundColor": "#144779",
      "cursor": "pointer"
    });
  }
});
