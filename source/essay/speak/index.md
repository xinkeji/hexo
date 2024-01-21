---
title: 短文
top_img: false
comments: false
date: 2021-03-14 20:00:00
updated: 2022-08-27 12:00:00
translate_title: speak
subtitle: Speak
aside: false
description: C果粉圈 即刻短文页面
---
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@waline/client@v2/dist/waline.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@waline/client@v2/dist/waline-meta.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn 'https://g0f.cn/essay/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@waline/client@v2/dist/waline.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://kkapi.ccknbc.cc/api/ispeak';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      Waline.init({
        el: '.ispeak-comment',
        path: path + '?q=' + speakId,
        pageTitle: title || contentSub,
        site: 'C果粉圈 即刻短文',
        useBackendConf: true,
        serverURL: 'https://waline.ccknbc.cc',
        pageSize: 10,
        requiredMeta: ["nick", "mail"],
        login: 'force',
        dark: 'html[data-theme="dark"]',
        imageUploader: function (file) {
          let formData = new FormData();
          let headers = new Headers();
          formData.append("file", file);
          formData.append("album_id", "10");
          formData.append("permission", "0");
          headers.append("Authorization", "Bearer 24|o8Crl5y0oK3luyUs17fBxDtAcevk1iiLHVFMNjpA");
          headers.append("Accept", "application/json");
          return fetch("https://wmimg.com/api/v1/upload", {
            method: "POST",
            headers: headers,
            body: formData,
          })
            .then((resp) => resp.json())
            .then((resp) => resp.data.links.url);
          },
        turnstileKey: '0x4AAAAAAAECBl27OB5SZrQT',
        emoji:
          [
            "https://cdn.jsdelivr.net/npm/sticker-heo/Sticker-100/",
            // "https://cdn.jsdelivr.net/npm/telegram-gif/Telegram-Gif/",
            // "https://cdn.jsdelivr.net/npm/@waline/emojis/tw-emoji/"
          ]
      })
    }
  });
</script>