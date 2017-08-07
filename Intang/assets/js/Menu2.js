$(function () {
	
//	//分类list
//	var str = '<ul>'+
//					'<li class="lii">'+
//							'<a href="home.html"><img src="links/img/souye.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/home.png"/></a>'+
//							'<span>首页</span>'+
//					'</li>'+
//					'<li id="box_list_search">'+
//							'<a href="javascript:;"><img src="links/img/feiyiminglu.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/feiyi.png"/></a>'+
//							'<span>搜索</span>'+
//					'</li>'+
//					'<li>'+
//							'<a href="huifen.html"><img src="links/img/minglupass.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/pass.png"/></a>'+
//							'<span>非遗名录</span>'+
//					'</li>'+
//					'<li>'+
//							'<a href="javascript:;"><img src="links/img/shenbao.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/shenbao.png"/></a>'+
//							'<span>我要申报</span>'+
//					'</li>'+
//					'<li>'+
//							'<a href="javascript:;"><img src="links/img/Group 13.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/Group 13.png"/></a>'+
//							'<span>官方服务</span>'+
//					'</li>'+
//				'</ul>';
//	$('#box_list').append(str);
//	
//	//搜索
//	var sou = '<div class="banner_remove" id="">'+
//					'<a href="javascript:;">'+
//						'<span>|</span>'+
//						'<img src="links/img/Combined Shape.png"/>'+
//					'</a>'+
//				'</div>'+
//				'<div class="banner_search">'+
//					'<input type="text" placeholder="请输入非遗相关内容" id="Text"/>'+
//					'<input type="image" src="links/img/sousuo.png"/>'+
//				'</div>';
//	$('#content_search').append(sou);
	
	
	
	
	
	//下拉菜单
	var banner_had = $('#banner_had');
	var list_menu = $('#list_menu');
	var cover = $('#cover');
	var banner_menu_Button = $('#banner_menu_Button');
	var box = $('#box');
	var Catalog = $('#Catalog');
	var menu = $('#menu');
	
	
	
	
	//点击分类变为高光
	$('#box_list').on('click','li',function(){
		$(this).addClass('lii').siblings().removeClass('lii');
	})

	
	
	
	
	//显示
	banner_had.click(function(){
		list_menu.css({
			'right':'0',
			'transition':'all 0.5s'
		})
		cover.css('display','block');
		stop();
	})
	//隐藏
	banner_menu_Button.click(function(){
		alert(123)
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		cover.css('display','none');
		move();
	})
	//点击其他部分隐藏
	cover.click(function(){
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		cover.css('display','none');
		Catalog.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		move();
	})
	
	//点击搜索
	$('#content_search').hide();
	$('#box_list_search').click(function(event){
		
		var blo = $('#box_search').css('display');
    	if(blo == 'block'){
    		event.stopPropagation();
    	}else{
    		if($("#content_search").is(":hidden")){
				$('#content_search').show();
			}else{
				$('#content_search').hide();
			}
    	}
//		var display = $('#content_search').css('display');
//		if(display == 'none'){
//			$('#content_search').css({
//				'display':'block',
//				'top':'5.05rem',
//				'transition':'all 0.5s'
//			});
//		}else{
//			$('#content_search').css({
//				'display':'none',
//				'top':'2.05rem',
//				'transition':'all 0.5s'
//			})
//		}
		
	})
	
	
	
	
	
	
	//点击目录
	menu.click(function(){
		Catalog.css({
			'right':'0',
			'transition':'all 0.5s'
		})
		cover.css('display','block');
		stop();
	})
	
	
	
	
	//实现滚动条无法滚动
	var mo=function(e){
		e.preventDefault();
	};
	
	/***禁止滑动***/
	function stop(){
	        document.body.style.overflow='hidden';        
	        document.addEventListener("touchmove",mo,false);//禁止页面滑动
	}
	
	/***取消滑动限制***/
	function move(){
	        document.body.style.overflow='';//出现滚动条
	        document.removeEventListener("touchmove",mo,false);        
	}
	
	
	
	//点击加载
	$('#load').click(function(){
		$('#load').css('display','none');
		$('#load_gif').css('display','block');
		setTimeout(function(){
			$('#load_gif').css('display','none');
			$('#load').css('display','block');
			$('.remo').css('display','block');
		},1000)
		
	})
	
	
	
	//重置确定
	$('#list_menu_input').on('click','input',function(){
		$(this).addClass('inp').siblings().removeClass('inp');
	})
	
	
	
	
	//最多显示字数
	var num = $('.list_menu_span');
	for(var i =0; i<num.length; i++){
		console.log(typeof $(num[i]).html());
		var str = $(num[i]).html();
		var s = str;
		if(str.length>10){
			s = str.substring(0,10)+'...';
		}
		$(num[i]).html(s);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})