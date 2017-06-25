var curIndex = 0;

function InitAlbum()
{
	curIndex = 0;
}

function LoadImage(rootPath, foldername)
{
	var folderPath = "ROOT/images/album/";
	folderPath = folderPath.replace("ROOT", rootPath);
	var xmlHttp = null;
	if (window.XMLHttpRequest)
	{
		xmlHttp = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlHttp != null)
	{
		try
		{
			var path = folderPath + foldername + "/cfg.xml";
			xmlHttp.open("GET", path, false);
			xmlHttp.send();
			
			var photoFrame = document.getElementById("PHOTO_FRAME");
			if (photoFrame == null || photoFrame == undefined)
			{
				alert("Can't Find Photo Frame!");
				return;
			}
			var doc = xmlHttp.responseXML;
			var countNodes = doc.getElementsByTagName("pic");
			var countNode = countNodes[0];
			var nodes = countNode.getElementsByTagName("range");
			var ctxt = countNode.attributes.getNamedItem("c").value;
			var totalCount = parseInt(ctxt);
			if (totalCount <= curIndex)
			{
				return;
			}
			var ii = 0;
			for (var i = 0; i < nodes.length; ++i)
			{
				var node = nodes[i];
				var atrs = node.attributes;
				if (atrs == null || atrs == undefined)
					continue;
				var fromAtr = atrs.getNamedItem("from");
				if (fromAtr == null || fromAtr == undefined)
					continue;
				var toAtr = atrs.getNamedItem("to");
				if (toAtr == null || toAtr == undefined)
					continue;
				var fromIndex = parseInt(fromAtr.value);
				var toIndex = parseInt(toAtr.value);
				
				var ji = 0;
				for (var index = fromIndex; index <= toIndex && ji < 12; ++index)
				{
					if (ii > curIndex)
					{
						var txt = "0000" + index;
						txt = txt.slice(-4);
						
						var newFigure = document.createElement("figure");
						newFigure.setAttribute("class", "gallery-item");
						photoFrame.appendChild(newFigure);
						
						var newImg = document.createElement("img");
						var imgPath = folderPath + foldername + "/IMG_" + txt + ".jpg";
						newImg.setAttribute("src", imgPath);
						newImg.setAttribute("alt", "");
						newFigure.appendChild(newImg);
						
						var newFigcaption = document.createElement("figcaption");
						var t = document.createTextNode("IMG_" + txt + ".jpg");
						newFigcaption.appendChild(t);
						newFigure.appendChild(newFigcaption);
						
						++ji;
						++curIndex;
					}
					
					++ii;
				}
			}
			$('.gallery-item').ma5gallery({
				preload:false,
				fullscreen:false
			});
		}
		catch (e)
		{
			alert(e.message);
			return;
		}
	}
	
	folderPath += foldername;
}

function LoadImageHainan()
{
	LoadImage("../..", "hainan");
}