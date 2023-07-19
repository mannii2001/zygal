
  window.addEventListener('DOMContentLoaded', function() {
    let canvas = document.getElementById('canvas');
    var downloadLink = document.getElementById('download-link');
    
    var ctx = canvas.getContext('2d');
    var char = 'A';
    
    ctx.font = '16px Arial';
    ctx.fillStyle = 'white';
    ctx.color = 'blue';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, canvas.width / 2, canvas.height / 2);
    
    downloadLink.addEventListener('click', function(e) {
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var pixels = imageData.data;
      var pixelData = '';   
      
      for (var i = 0; i < pixels.length; i += 4) {
        var r = pixels[i];
        var g = pixels[i + 1];
        var b = pixels[i + 2];
        
        var hex = '0'+ '×' + componentToHex(r) + componentToHex(g) + componentToHex(b)+', ';
        pixelData += hex;
      }
      
      downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(pixelData);
    });
    
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
  });
  

