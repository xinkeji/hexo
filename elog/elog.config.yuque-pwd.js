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
  image: {
  enable: true,
  platform: 'github',
  github: {
    user: process.env.GITHUB_USER,
    token: process.env.GIT_TOKEN,
    repo: process.env.GITHUB_REPO,
    prefixKey: '',
    host: 'cdn.jsdelivr.net'
  
    }
  },
}
