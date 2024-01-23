看起来您希望将给定的 JavaScript 对象进行格式化，以下是格式化后的代码：

```javascript
module.exports = {
  write: {
    platform: 'yuque-pwd',
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PWD,
      host: '',
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      linebreak: false
    }
  },
  deploy: {
    platform: "local",
    local: {
      outputDir: "./source/_posts/语雀/",
      filename: "title",
      format: "matter-markdown",
      catalog: true,
      formatExt: "",
    }
  },
  platform: 'github',
  github: {
    user: process.env.LGH_USER,
    token: process.env.LGH_TOKEN,
    repo: process.env.LGH_REPO,
    prefixKey: '',
    host: 'cdn.jsdelivr.net'
  }
}
```

我已经将代码进行了适当的格式化，使其更易于阅读和理解。如果您有其他需要，请随时告诉我。
