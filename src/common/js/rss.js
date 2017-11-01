

var oDoc = window.document;

var sUrl = oDoc.location.href;

var wFlag = /www/i.test(sUrl);

var oUrl = wFlag?'http://www.zouyang1230.com/blog/myrss/getrss/?u=':'http://zouyang1230.com/blog/myrss/getrss/?u=';

var oReLoadBtn = oDoc.getElementById("reLoad");

var nTime = parseInt(new Date().getTime() / 1000);

oReLoadBtn.onclick = function()
{
	try{
		window.localStorage.clear();
		location.reload();
	}catch(e){}
}

/*zouyang*/
var oZY = oDoc.getElementById("myblog");
getRss(oZY,"https://www.w3.org/blog/feed/","w3c_News:","w3c_p",11,"https://www.w3.org");
getRss(oZY,"https://css-tricks.com/feed/","css-tricks:","ctricks_p",11,"https://css-tricks.com");
getRss(oZY,"http://zouyang1230.com/blog/feed/atom","邹阳:","zy_p",10,"http://zouyang1230.com/blog");

/*------------------------前端 begin--------------------------------------------*/
var ofront = oDoc.getElementById("front");
getRss(ofront,"http://www.ruanyifeng.com/blog/atom.xml","阮一峰:","ryf_p",10,"http://www.ruanyifeng.com/blog/");
getRss(ofront,"http://cdc.tencent.com/feed/","cdc:","cdc_p",12,"http://cdc.tencent.com");
getRss(ofront,"http://fex.baidu.com/feed.xml","百度 Web前端研发部:","BD_p",11,"http://fex.baidu.com/");
getRss(ofront,"http://www.alloyteam.com/feed/","腾讯alloyteam:","sTCalloyteam_p",11,"http://www.alloyteam.com/");
getRss(ofront,"http://taobaofed.org/atom.xml","淘宝FED前端:","FED_p",10,"http://taobaofed.org/");
getRss(ofront,"http://eux.baidu.com/feed","百度EUX:","EUX_p",11,"http://eux.baidu.com/");
getRss(ofront,"http://ued.ctrip.com/blog/feed","携程web前端:","sct_p",11,"http://ued.ctrip.com/blog/");
getRss(ofront,"https://75team.com/rss.html","qwt360:","qwt360_p",11,"https://75team.com/post/list");
getRss(ofront,"http://feed.cnblogs.com/blog/u/57731/rss","司徒正美:","RubyLouvre_p",10,"http://www.cnblogs.com/rubylouvre");
getRss(ofront,"http://www.zhangxinxu.com/wordpress/feed/","张鑫旭:","zxx_p",11,"http://www.zhangxinxu.com/wordpress/");

/*------------------------后端 begin--------------------------------------------*/
var oend = oDoc.getElementById("end");
getRss(oend,"http://www.laruence.com/feed","PHP成员 Laruence:","Laruence_p",11,"http://www.laruence.com/");
getRss(oend,"http://rango.swoole.com/feed/","韩天峰的博客:","rango_p",11,"http://rango.swoole.com/");
getRss(oend,"https://www.byvoid.com/feed","byvoid(nodejs指南作者):","byvoid_p",11,"https://www.byvoid.com/");
getRss(oend,"http://www.linuxidc.com/rssFeed.aspx","linuxidc:","linuxidc_p",11,"http://www.linuxidc.com");

/*------------------------数据库 begin--------------------------------------------*/
var odatabase = oDoc.getElementById("database");
getRss(odatabase,"https://blogs.oracle.com/rss","Oracle:","oracle_p",11,"https://blogs.oracle.com");
getRss(odatabase,"http://imysql.com/feed","iMySQL | 老叶茶馆:","iMySQL_p",11,"http://imysql.com/");
getRss(odatabase,"http://isky000.com/feed","简朝阳（Sky.Jian）:","jzy_p",11,"http://isky000.com/");

/*------------------------其他 begin--------------------------------------------*/
var oother = oDoc.getElementById("other");
getRss(oother,"https://www.zhihu.com/rss","知乎每日精选:","zh_p",11,"https://www.zhihu.com/");
getRss(oother,"http://36kr.com/feed","36kr:","o36kr_p",11,"http://36kr.com");
getRss(oother,"http://www.freebuf.com/feed","freebuf","freebuf_p",11,"http://www.freebuf.com/");
getRss(oother,"http://www.infoq.com/cn/feed","infoq:","infoq_p",11,"http://www.infoq.com/cn/");
getRss(oother,"http://www.ttlsa.com/feed/","运维生存时间","ywscsj_p",11,"http://www.ttlsa.com/");
getRss(oother,"http://www.lcode.org/feed/","江清清:","lcode_p",11,"http://www.lcode.org");
getRss(oother,"http://coolshell.cn/feed","C/C++陈皓:","ch_p",11,"http://coolshell.cn/");
getRss(oother,"http://mindhacks.cn/feed/","C++刘未鹏:","lwp_p",11,"http://mindhacks.cn/");
getRss(oother,"http://tianchunbinghe.blog.163.com/rss","CommonLisp 田春","tc_p",11,"http://tianchunbinghe.blog.163.com/");
getRss(oother,"http://blog.devtang.com/atom.xml","唐巧","tq_p",10,"http://blog.devtang.com/");
getRss(oother,"https://www.xiaohui.com/rss/","自由小辉","zyxh_p",11,"https://www.xiaohui.com/");
getRss(oother,"http://blog.csdn.net/wangyaninglm/rss/list","OpenCV-shiter:","shiter_p",10,"http://blog.csdn.net/wangyaninglm");
getRss(oother,"http://blog.csdn.net/foruok/rss/list","foruok:","foruok_p",10,"http://blog.csdn.net/foruok");
getRss(oother,"http://blog.csdn.net/singwhatiwanna/rss/list","任玉刚:","ryg_p",6,"http://blog.csdn.net/singwhatiwanna");
getRss(oother,"http://blog.csdn.net/lmj623565791/rss/list","张鸿洋:","zhx_p",6,"http://blog.csdn.net/lmj623565791");
getRss(oother,"http://blog.csdn.net/guolin_blog/rss/list","郭林:","gl_p",6,"http://blog.csdn.net/guolin_blog");


/*------------------------英文 begin--------------------------------------------*/
var oEn = oDoc.getElementById("en");
getRss(oEn,"https://blogs.msdn.microsoft.com/feed/","微软官方blog:","msdn_p",11,"https://blogs.msdn.microsoft.com");
getRss(oEn,"https://hacks.mozilla.org/feed/","Mozilla-blog:","mozi_p",11,"https://hacks.mozilla.org/");
getRss(oEn,"http://news.mit.edu/rss/feed","MIT:","mit_p",11,"http://news.mit.edu/");

function getRss(dom,url,txt,loadingRootId,timeSubStr,originUrl)
{
	if( window.localStorage )
	{
		if( window.localStorage.getItem("dateTime") == null || window.localStorage.getItem(loadingRootId)==null || ((nTime - window.localStorage.getItem("dateTime")) > 32400) )
		{
			//执行ajax 本地存储
			$.ajax({
			 	type: 'get',
			 	url: oUrl + url,
				beforeSend: function() {
					
					var oPul = document.createElement("ul");
					var oP = document.createElement("a");
					oPul.id=loadingRootId;	//id名
					oP.className="preTxt";
					oP.href = originUrl;
					var oPTxt = document.createTextNode(txt);	//RSS名字
					var oImg = document.createElement("img");
					oImg.src="loading.gif";
					oP.appendChild(oPTxt);
					oP.appendChild(oImg);
					oPul.appendChild(oP);
					oPul.style.backgroundColor = "#fff";
					// oPul.style.height = "142px";
					oPul.style.width = "300px";
					oPul.style.margin = "10px";
					dom.appendChild(oPul);
					
			  	},
			 	dataType: 'json',
			  	success: function(data) {
			  		// console.log(data);
			  		//本地存储
			  		window.localStorage.setItem("dateTime", nTime);
			  		window.localStorage.setItem(loadingRootId, JSON.stringify(data) );

			  		/*隐藏等待loading*/
					var oP = document.getElementById(loadingRootId);	//对应名字
					oP.style.display = "none";


					var oUl = document.createElement("ul");
					var oHead = document.createElement("li");
					var oHeadA = document.createElement("a");
					oHeadA.href = originUrl;
					var oHeadTxt = document.createTextNode(txt);	//RSS名字
					oHead.className = "headLi";
					oHeadA.appendChild(oHeadTxt);
					oHead.appendChild(oHeadA);
					// oUl.style.height = "142px";
					oUl.appendChild(oHead);
					if(data.entry)
					{
						$.each(data.entry,function(attr,value)	//data设置
						{
							if(attr>5)	//只取文章前6条
							{
								return ;
							}
							var title = value.title.content?value.title.content:value.title;	//标题
							var time = value.published;		//发布时间
							time = time.substring(0,timeSubStr);
							var oLi = document.createElement("li");
							var oA = document.createElement("a");
							oA.href = value.id;		//链接 value.id.replace(/^tag:/,"")
							var oSpan = document.createElement("span");
							oSpan.className = "timeSpan";
							var oTitle = document.createTextNode(title);
							var oTime = document.createTextNode(time);

							oSpan.appendChild(oTime);
							oA.appendChild(oTitle);
							oLi.appendChild(oA);
							oLi.appendChild(oSpan);
							oUl.appendChild(oLi);
						});
					}
					else if(data.channel)
					{
						$.each(data.channel.item,function(attr,value)	//data设置
						{
							if(attr>5)	//只取文章前6条
							{
								return ;
							}
							var title = value.title;	//标题
							var time = value.pubDate;		//发布时间
							time = time.substring(0,timeSubStr);
							var oLi = document.createElement("li");
							var oA = document.createElement("a");
							oA.href = value.link;		//链接
							var oSpan = document.createElement("span");
							oSpan.className = "timeSpan";
							var oTitle = document.createTextNode(title);
							var oTime = document.createTextNode(time);

							oSpan.appendChild(oTime);
							oA.appendChild(oTitle);
							oLi.appendChild(oA);
							oLi.appendChild(oSpan);
							oUl.appendChild(oLi);
						});
					}
					dom.appendChild(oUl);
			 	}
			});
		}
		else
		{
			//从本地存储获得数据
			var oDateJson = JSON.parse(window.localStorage.getItem(loadingRootId));

			var oUl = document.createElement("ul");
			var oHead = document.createElement("li");
			var oHeadA = document.createElement("a");
			oHeadA.href = originUrl;
			var oHeadTxt = document.createTextNode(txt);	//RSS名字
			oHead.className = "headLi";
			oHeadA.appendChild(oHeadTxt);
			oHead.appendChild(oHeadA);
			// oUl.style.height = "142px";
			oUl.appendChild(oHead);
			try{
				if(oDateJson.entry)
				{
					$.each(oDateJson.entry,function(attr,value)	//data设置
					{
						if(attr>5)	//只取文章前6条
						{
							return ;
						}
						var title = value.title.content?value.title.content:value.title;	//标题
						var time = value.published;		//发布时间
						time = time.substring(0,timeSubStr);
						var oLi = document.createElement("li");
						var oA = document.createElement("a");
						oA.href = value.id;		//链接 value.id.replace(/^tag:/,"")
						var oSpan = document.createElement("span");
						oSpan.className = "timeSpan";
						var oTitle = document.createTextNode(title);
						var oTime = document.createTextNode(time);

						oSpan.appendChild(oTime);
						oA.appendChild(oTitle);
						oLi.appendChild(oA);
						oLi.appendChild(oSpan);
						oUl.appendChild(oLi);
					});
				}
				else if(oDateJson.channel)
				{
					$.each(oDateJson.channel.item,function(attr,value)	//data设置
					{
						if(attr>5)	//只取文章前6条
						{
							return ;
						}
						var title = value.title;	//标题
						var time = value.pubDate;		//发布时间
						time = time.substring(0,timeSubStr);
						var oLi = document.createElement("li");
						var oA = document.createElement("a");
						oA.href = value.link;		//链接
						var oSpan = document.createElement("span");
						oSpan.className = "timeSpan";
						var oTitle = document.createTextNode(title);
						var oTime = document.createTextNode(time);

						oSpan.appendChild(oTime);
						oA.appendChild(oTitle);
						oLi.appendChild(oA);
						oLi.appendChild(oSpan);
						oUl.appendChild(oLi);
					});
				}
				dom.appendChild(oUl);
			}
			catch(e)
			{
				console.log(e);
				var oP = document.createElement("a");
				oP.id=loadingRootId;	//id名
				oP.className="preTxt";
				oP.href = originUrl;
				var oPTxt = document.createTextNode(txt);	//RSS名字
				var oImg = document.createElement("img");
				oImg.src="loading.gif";
				oP.appendChild(oPTxt);
				oP.appendChild(oImg);
				dom.appendChild(oP);
			}
		}
	}
	else
	{
		//不使用本地存储 直接ajax
		$.ajax({
		 	type: 'get',
		 	url: oUrl + url,
			beforeSend: function() {

				var oP = document.createElement("a");
				oP.id=loadingRootId;	//id名
				oP.className="preTxt";
				oP.href = originUrl;
				var oPTxt = document.createTextNode(txt);	//RSS名字
				var oImg = document.createElement("img");
				oImg.src="loading.gif";
				oP.appendChild(oPTxt);
				oP.appendChild(oImg);
				dom.appendChild(oP);

		  	},
		 	dataType: 'json',
		  	success: function(data) {
		  		// console.log(data);

		  		/*隐藏等待loading*/
				var oP = document.getElementById(loadingRootId);	//对应名字
				oP.style.display = "none";


				var oUl = document.createElement("ul");
				var oHead = document.createElement("li");
				var oHeadA = document.createElement("a");
				oHeadA.href = originUrl;
				var oHeadTxt = document.createTextNode(txt);	//RSS名字
				oHead.className = "headLi";
				oHeadA.appendChild(oHeadTxt);
				oHead.appendChild(oHeadA);
				oUl.appendChild(oHead);
				if(data.entry)
				{
					$.each(data.entry,function(attr,value)	//data设置
					{
						if(attr>5)	//只取文章前6条
						{
							return ;
						}
						var title = value.title.content?value.title.content:value.title;	//标题
						var time = value.published;		//发布时间
						time = time.substring(0,timeSubStr);
						var oLi = document.createElement("li");
						var oA = document.createElement("a");
						oA.href = value.id;		//链接 value.id.replace(/^tag:/,"")
						var oSpan = document.createElement("span");
						oSpan.className = "timeSpan";
						var oTitle = document.createTextNode(title);
						var oTime = document.createTextNode(time);

						oSpan.appendChild(oTime);
						oA.appendChild(oTitle);
						oLi.appendChild(oA);
						oLi.appendChild(oSpan);
						oUl.appendChild(oLi);
					});
				}
				else if(data.channel)
				{
					$.each(data.channel.item,function(attr,value)	//data设置
					{
						if(attr>5)	//只取文章前6条
						{
							return ;
						}
						var title = value.title;	//标题
						var time = value.pubDate;		//发布时间
						time = time.substring(0,timeSubStr);
						var oLi = document.createElement("li");
						var oA = document.createElement("a");
						oA.href = value.link;		//链接
						var oSpan = document.createElement("span");
						oSpan.className = "timeSpan";
						var oTitle = document.createTextNode(title);
						var oTime = document.createTextNode(time);

						oSpan.appendChild(oTime);
						oA.appendChild(oTitle);
						oLi.appendChild(oA);
						oLi.appendChild(oSpan);
						oUl.appendChild(oLi);
					});
				}
				dom.appendChild(oUl);
		 	}
		});
	}



}
