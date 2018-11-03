	var slideIndex = 0; 
	var imagesList = [];
	var time = 1000;

	// Image List
	imagesList[0] = 'https://scontent-lhr3-1.cdninstagram.com/vp/ccb5d1e543c6a9a21b89b1b53c551fd2/5C0CE8FB/t51.2885-15/e35/38261715_572117689856994_5443701795903766528_n.jpg';
	imagesList[1] = 'https://scontent-lhr3-1.cdninstagram.com/vp/d36c3fb9c20fdb313bca4b1e770ab711/5C100534/t51.2885-15/e35/36674478_270879997002949_3804133236502691840_n.jpg';
	imagesList[2] = 'https://scontent-lhr3-1.cdninstagram.com/vp/90ee67d2158ba8e68bf479682c8620ed/5BEEE67D/t51.2885-15/e35/32158607_166978060642460_8520486293673607168_n.jpg';
	imagesList[3] = 'https://scontent-lhr3-1.cdninstagram.com/vp/b00776f458759e3d0fd46a08bb9603ff/5C067BB2/t51.2885-15/e35/22429698_1487270648017297_360696481709031424_n.jpg';
	imagesList[4] = 'https://scontent-lhr3-1.cdninstagram.com/vp/c17025a8cf19e0678f646c71d5544020/5C09C62A/t51.2885-15/e35/16789392_213117165829588_2945246558779604992_n.jpg';
	imagesList[5] = 'https://scontent-lhr3-1.cdninstagram.com/vp/3eb28b9631158fb9315e48c69dd56e71/5C00A0DD/t51.2885-15/e35/15803284_606393809691860_2106144901308612608_n.jpg';
	imagesList[6] = 'https://scontent-lhr3-1.cdninstagram.com/vp/87536bf3d927940fcd3626d376d451a1/5BF8099F/t51.2885-15/e35/15046989_343187336054785_5121382547791544320_n.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = imagesList[slideIndex];

		if(slideIndex < imagesList.length - 1){
			slideIndex++;
		} else {
			slideIndex = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;