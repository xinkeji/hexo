---
title: 关于本站
description: 果粉圈 关于页面
top_img: false
translate_title: about
subtitle: About
date: 2020-08-08 14:55:19
updated: 2023-07-05 12:00:00
---
## 镜像站点

{% note success flat %} 以下排名不分先后，请选择适合自己访问较快的即可</br> **[GitHub](https://github.g0f.cn) | [GitLab](https://gitlab.g0f.cn) | [Gitee](https://ccknbc.gitee.io) | [Bitbucket](https://ccknbc.bitbucket.io) | [Vercel](https://vercel.g0f.cn) | [Netlify](https://netlify.g0f.cn) | [CloudFlare](https://cloudflare.g0f.cn)** {% endnote %}

## 站点源码

{% note success flat %} 本站所有内容完全公开，可前往以下地址查看源码</br>  **[GitHub](https://github.com/ccknbc-actions/blog-butterfly) | [GitLab](https://gitlab.com/CCKNBC/ccknbc.gitlab.io) | [JihuLab](https://jihulab.com/ccknbc-backup/blog-butterfly) | [Bitbucket](https://bitbucket.org/ccknbc/blog) | [Coding](https://ccknbc.coding.net/public/blog/blog-butterfly/git/files) | [Gitee](https://gitee.com/ccknbc/blog-butterfly)** {% endnote %}
{% codeblock %}
{% include_code /code/王者荣耀战力查询.html %}
{% endcodeblock %}

{% raw %}
<!DOCTYPE html>
<html lang="zh-cn">
	<head>
		<meta charset="utf-8" />
		<title>王者荣耀战力查询</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=0.9">
		<link rel="stylesheet" type="text/css" href="css/main.css" />
		<link href="https://cdn.bootcdn.net/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet">
		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></script>
	</head>
	<body>
<div class="container" style="padding-top:20px;">
			<div class="col-xs-12 col-sm-10 col-lg-8 center-block" style="float: none;">
				<div class="panel panel-primary">
					<div class="panel-heading" style="background: linear-gradient(to right,#8ae68a,#5ccdde,#b221ff);">
						<center>
							<font color="#000000"><b>王者荣耀战力查询</b></font>
						</center>
					</div>
					<div class="panel-body">
						<center>
							<div class="alert alert-success">

<img class="img-circle"
									style="border: 2px solid #1281FF; margin-left:3px; margin-right:3px;"
									src="http://q1.qlogo.cn/g?b=qq&nk=727338622&s=100" width="60px" height="60px" id="photo">
								<br>
</div>
							<div class="alert alert-info" id="alias">战力小助手</div>
						</center>
						<div class="input-group">
							<span class="input-group-addon"><i class="icon-ghost"></i>英雄全称</span>
							<input name="yxname" class="form-control" placeholder="请输入要查询的英雄" id="yxname">
						</div>
						<br />
						<div class="input-group">
							<span class="input-group-addon"><i class="icon-cup"></i> 查询大区</span>
							<select class="form-control" id="seltname">
								<option value="qq">安卓QQ</option>
								<option value="wx">安卓VX</option>
								<option value="ios_qq">苹果QQ</option>
								<option value="ios_wx">苹果VX</option>
							</select>
						</div>
						<br />
						<center>
							<div class="btn-group btn-group-justified" role="group">
								<div class="btn-group" role="group">
									<button onclick="Startquery()" class="btn btn-danger btn-lg">开始查询</button>
								</div>
							</div>
						</center>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-10 col-lg-8 center-block" style="float: none;">
				<div class="table-responsive" id="mydiv" style="text-align:center;"></div>
				<center>
					<p style="text-align:center"><br>&copy; Powered by <a href="https://www.sapi.run" target="_blank">萌控科技</a>
					</p>
				</center>
			</div>
<script src="./js/mine.js" type="text/javascript"></script>
	</body>

</html>

{% endraw %}
