function showImage(imgName, imgText) {
				var curImage = document.getElementById('currentImg');
				var textDiv = document.getElementById('rightText');

				curImage.src = imgName;
				curImage.alt = imgName;
				curImage.title = imgName;
				textDiv.innerHTML = imgText;
			}

			function preLoadImages() {
				var tmp = new Array();
				for(var i = 0; i < attributes.length; i++) {
					tmp[i] = new Image();
					tmp[i].src = attributes[i];
				}
}
