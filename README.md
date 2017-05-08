<!--<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	    <meta name="format-detection" content="telephone=no, email=no" />
	    <meta name="apple-mobile-web-app-capable" content="yes"/>
	    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	    
	</head>-->
	<body>
		<link rel="stylesheet" type="text/css" href="find_css/find.css"/>
	    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
		<div class="box">
			<header>
				<label>微信</label>
				<a href="#/seek" class="right_1"></a>
				<a class="right_2" ng-click="add()"></a>
			</header>
			<section ng-show="sect">
				<ul>
					<li><a href="#"><img src="ima/to_03.jpg"/><span>发起群聊</span></a></li>
					<li><a href="#"><img src="ima/to_06.jpg"/><span>添加朋友</span></a></li>
					<li><a href="#"><img src="ima/to_08.jpg"/><span>扫一扫</span></a></li>
					<li><a href="#"><img src="ima/to_10.jpg"/><span>收付款</span></a></li>
					<li><a href="#"><img src="ima/to_12.jpg"/><span>帮助与反馈</span></a></li>
				</ul>
			</section>
			<div class="content">
				<div>
					<ul>
						<li><img src="imagesa/{{findname1.img}}"/></li>
						<li>{{findname1.title}}</li>
					</ul>
				</div>
				<div class="root" ng-repeat="x in findname2">
					<ul>
						<li><img src="imagesa/{{x.imag1}}"/></li>
						<li>{{x.text1}}</li>
					</ul>
					<ul>
						<li><img src="imagesa/{{x.imag2}}"/></li>
						<li>{{x.text2}}</li>
					</ul>
				</div>
				<div>
					<ul>
						<li><img src="imagesa/{{findname3.image}}"/></li>
						<li>{{findname3.typet}}</li>
					</ul>
				</div>
			</div>
			<footer>
				<ul>
					<li><a href="#/home"><span class="fa fa-fw fa-comment" style="font-size: 1.5rem;"></span><br/>微信</a></li>
					<li><a href="#/book"><span class="fa fa-fw fa-user" style="font-size: 1.5rem;"></span><br/>通讯录</a></li>
					<li class="li1"><a href="#/find"><span class="fa fa-fw fa-eye" style="font-size: 1.5rem;"></span><br/>发现</a></li>
					<li><a href="#/mine"><span class="fa fa-fw fa-female" style="font-size: 1.5rem;"></span><br/>我</a></li>
				</ul>
			</footer>
		</div>
	</body>
<!--</html>-->
