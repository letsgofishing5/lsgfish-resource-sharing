import { defineConfig } from "vitepress";
export default defineConfig({
  base: "/lsgfish-resource-sharing/",
  title: "资源收藏与分享",
  lang: "zh-CN",
  description: "收集学习，娱乐资源",
  themeConfig: {
    editLink: {
      pattern:
        "https://gitee.com/lets-go-fishing/lsgfish-resource-sharing/issues",
      text: "为此页提供修改建议",
    },
    algolia: {
      appId: "DM1B8XXB9T",
      apiKey: "62c13e68978edd63e4e91d03970e2f52",
      indexName: "lsgfish-resource-sharing",
      initialQuery: "",
      searchParameters: {},
    },
    nav: [
      { text: "信息公告", link: "/overview/index.md" },
      {
        text: "学习",
        items: learn(),
      },
      {
        text: "娱乐",
        items: amuse(),
      },
      {
        text: "工具",
        items: utils(),
      },
      {
        text: "书源",
        link: "/book/booksource.md",
      },
      {
        text: "第三方资源站点链接",
        link: "/third/index.md",
      },
      {
        text: "交流群",
        link: "/CommunicationGroup/index.md",
      },
    ],
    footer: {
      message: "资源来自网络搜索，侵权请联系删除",
      copyright: "Copyright © 2022-present 走我们钓鱼去",
    },
  },
});
/**
 * 工具
 * @returns
 */
function utils() {
  return [
    {
      text: "软件类",
      link: "/utils/software.md",
    },
    {
      text: "实体类",
      link: "/utils/entity.md",
    },
    {
      text: "搜索引擎",
      link: "/utils/search.md",
    },
  ];
}
/**
 * 娱乐
 * @returns
 */
function amuse() {
  return [
    {
      text: "视频",
      link: "/amuse/video.md",
    },
    {
      text: "音乐",
      link: "/amuse/music.md",
    },
    {
      text: "图库",
      link: "/amuse/image.md",
    },
    {
      text: "休闲",
      link: "/amuse/leisure.md",
    },
    {
      text: "扫一扫领取红包",
      link: "/amuse/redWrap.md",
    },
  ];
}
/**
 * 学习
 * @returns
 */
function learn() {
  return [
    {
      text: "编程",
      items: program(),
    },
    {
      text: "医学",
      link: "/learn/medical/medical.md",
    },
  ];
}
/**
 * 程序
 * @returns
 */
function program() {
  return [
    {
      text: "前端",
      link: "/learn/program/web.md",
    },
    {
      text: "后端",
      link: "/learn/program/serve.md",
    },
    {
      text: "UI",
      link: "/learn/program/UI.md",
    },
    {
      text: "运维",
      link: "/learn/program/operation.md",
    },
    {
      text: "github开源项目",
      link: "https://hellogithub.com/",
    },
  ];
}
