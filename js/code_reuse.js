function SetTop(rootPath, type)
{
	var top2 = "";
	if (type == "INDEX")
	{
		top2 = '\
			<li><a href="#HOME">主页</a></li>\
			<li><a href="#COMTENT">目录</a></li>\
			<li><a href="#ABOUT">简介</a></li>\
			<li><a href="#ESSAY">随笔</a></li>\
			<li><a href="#TECH">技术</a></li>\
			<li><a href="#PHOTO">相册</a></li>\
			<li><a href="#CONTACT">联系</a></li>\
			<li><a href="#" onclick="onClickMusicSwitch()" id="MUSIC_SWITCH">音乐 <span class="glyphicon glyphicon-play" aria-hidden="true"></span> </a></li>\
		';
	}
	else if (type == "ESSAY")
	{
		top2 = '\
			<li><a href="ROOT/index.html">主页</a></li>\
			<li><a href="#ESSAY">随笔</a></li>\
			<li><a href="#CONTACT">联系</a></li>\
			<li><a href="#" onclick="onClickMusicSwitch()" id="MUSIC_SWITCH">音乐 <span class="glyphicon glyphicon-play" aria-hidden="true"></span> </a></li>\
		';
	}
	var top1 = '\
	<header id="HOME" style="background-position: 50% -20px;">\
			<div class="section_overlay">\
				<nav class="navbar navbar-default navbar-fixed-top">\
				  <div class="container">\
					<!-- Brand and toggle get grouped for better mobile display -->\
					<div class="navbar-header">\
					  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\
						<span class="sr-only">Toggle navigation</span>\
						<span class="icon-bar"></span>\
						<span class="icon-bar"></span>\
						<span class="icon-bar"></span>\
					  </button>\
					  <a class="navbar-brand" href="ROOT/index.html"><img src="ROOT/images/logo.png" alt=""></a>\
					</div>\
					<!-- Collect the nav links, forms, and other content for toggling -->\
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
					  <ul class="nav navbar-nav navbar-right">\
	';

	var top3 = '\
					  </ul>\
					</div>\
					<!-- /.navbar-collapse -->\
				  </div><!-- /.container -->\
				</nav> \
				<div class="container">\
					<div class="row">\
						<div class="col-md-12 text-center">\
							<div class="home_text wow fadeInUp animated">\
								<h2>张东的博客</h2>\
								<p class="hidden-xs">一个真正的旅行家必是一个流浪者，经历着流浪者的快乐、诱惑和探险意志</p>\
								<img src="ROOT/images/shape.png" alt="">                        \
							</div>\
						</div>\
					</div>\
				</div>\
				<div class="container hidden-xs" id="MUSIC">\
					<div class="row">\
						<div class="col-md-12 text-center">\
							<div class="scroll_down">\
							<a href="#ESSAY"><img src="ROOT/images/scroll.png" alt=""></a>\
								<h4>翻滚吧</h4>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</header>\
	';
	var reg=new RegExp("ROOT","g");
	var top = top1 + top2 + top3;
	top = top.replace(reg, rootPath);
	document.write(top);
}

function SetBottom(rootPath)
{
	var bottom = '\
		<section class="contact" id="CONTACT">\
			<div class="container">\
				<div class="row">\
					<div class="col-md-12 col-xs-12 text-center">\
						<div class="contact_title  wow fadeInUp animated">\
							<h1>联系</h1>\
							<img src="ROOT/images/shape.png" alt="">\
							<p>有事的话可以留言或者联系我</p>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="container">\
				<div class="row">\
					<div class="col-md-3 col-xs-12 wow fadeInLeft animated">\
						<div class="single_contact_info">\
							<h2>电话</h2>\
							<p>+86 152 1058 2652</p>\
						</div>\
						<div class="single_contact_info">\
							<h2>QQ</h2>\
							<p>568892758</p>\
						</div>\
						<div class="single_contact_info">\
							<h2>邮箱</h2>\
							<p>568892758@qq.com</p>\
						</div>\
					</div>\
					<div class="col-md-9 col-xs-12 wow fadeInRight animated">\
						<form class="contact-form" action="">\
							<div class="row">\
								<div class="col-md-6">\
									<input type="text" class="form-control" id="name" placeholder="Name">\
									<input type="email" class="form-control" id="email" placeholder="Email">\
									<input type="text" class="form-control" id="subject" placeholder="Subject">                                \
								</div>\
								<div class="col-md-6">\
									<textarea class="form-control" id="message" rows="25" cols="10" placeholder="  Message Texts..."></textarea>\
									<button type="button" class="btn btn-default submit-btn form_submit">SEND MESSAGE</button>                                \
								</div>\
							</div>\
						</form>\
					</div>\
				</div>\
			</div>\
			<div class="container">\
				<div class="row">\
					<div class="col-md-12 col-xs-12 text-center">\
						<div class="work-with   wow fadeInUp animated">\
							<h3>欢迎留言！</h3>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
		<footer>\
			<div class="container">\
				<div class="container">\
					<div class="row">\
						<div class="col-md-12 text-center">\
							<div class="footer_logo   wow fadeInUp animated">\
								<img src="ROOT/images/logo.png" alt="">\
							</div>\
						</div>\
					</div>\
				</div>\
				<div class="container">\
					<div class="row">\
						<div class="col-md-12 text-center">\
							<div class="copyright_text   wow fadeInUp animated">\
								<p>&copy; ZhangDong 2017.</p>\
								<p>转载请注明出处</p>\
								仓库<a href="https://github.com/zd304/" target="_blank" title="zd304的github">GitHub</a>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</footer>\
	';
	var reg=new RegExp("ROOT","g");
	bottom = bottom.replace(reg, rootPath);
	document.write(bottom);
}