function SetTop(rootPath, type, fn)
{
	var top2 = "";
	if (type == "INDEX")
	{
		top2 = '\
			<li><a href="#HOME">主页</a></li>\n\
			<li><a href="#COMTENT">目录</a></li>\n\
			<li><a href="#ABOUT">简介</a></li>\n\
			<li><a href="#ESSAY">随笔</a></li>\n\
			<li><a href="#TECH">技术</a></li>\n\
			<li><a href="#PHOTO">相册</a></li>\n\
			<li><a href="#CONTACT">留言</a></li>\n\
			<li><a href="#" onclick="onClickMusicSwitch()" id="MUSIC_SWITCH">音乐 <span class="glyphicon glyphicon-play" aria-hidden="true"></span> </a></li>\
		';
	}
	else if (type == "ESSAY")
	{
		top2 = '\
			<li><a href="ROOT/index.html">主页</a></li>\n\
			<li><a href="#ESSAY">随笔</a></li>\n\
			<li><a href="#CONTACT">留言</a></li>\n\
			<li><a href="#" onclick="onClickMusicSwitch()" id="MUSIC_SWITCH">音乐 <span class="glyphicon glyphicon-play" aria-hidden="true"></span> </a></li>\n\
		';
	}
	else if (type == "PHOTO")
	{
		top2 = '\
			<li><a href="ROOT/index.html">主页</a></li>\n\
			<li><a href="#PHOTO">相册</a></li>\n\
			<li><a href="#CONTACT">留言</a></li>\n\
			<li><a href="#" onclick="onClickMusicSwitch()" id="MUSIC_SWITCH">音乐 <span class="glyphicon glyphicon-play" aria-hidden="true"></span> </a></li>\n\
		';
	}
	
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
			var path = "ROOT/web/include/top.html";
			path = path.replace("ROOT", rootPath);
			xmlHttp.open("GET", path, false);
			xmlHttp.send();
		}
		catch (e)
		{
			alert(e.message);
			return;
		}
		
		var top = xmlHttp.responseText;
		top = top.replace("LIST", top2);
		var reg = new RegExp("ROOT","g");
		top = top.replace(reg, rootPath);
		if (fn != null && fn != undefined)
		{
			top = fn(top);
		}
		document.write(top);
	}
}

function SetBottom(rootPath)
{
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
			var path = "ROOT/web/include/foot.html";
			path = path.replace("ROOT", rootPath);
			xmlHttp.open("GET", path, false);
			xmlHttp.send();
		}
		catch (e)
		{
			alert(e.message);
			return;
		}
		var reg=new RegExp("ROOT","g");
		var bottom = xmlHttp.responseText;
		bottom = bottom.replace(reg, rootPath);
		document.write(bottom);
	}
}

var on = false

function SetMusicOn(s)
{
	on = s;
}