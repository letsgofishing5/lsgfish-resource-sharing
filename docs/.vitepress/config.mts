import { defineConfig } from "vitepress";
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
export default defineConfig({
  base: "/lsgfish-resource-sharing/",
  title: "资源收藏与分享",
  lang: "zh-CN",
  description: "收集学习，娱乐资源",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern:
        "https://gitee.com/lets-go-fishing/lsgfish-resource-sharing/issues",
      text: "为此页提供修改建议",
    },
    nav: [
      { text: "总览", link: "/overview/index.md" },
      { text: "我的博客", link: "https://www.cnblogs.com/letgofishing/" },
      {
        text: "学习资源",
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
        text: "群友的个人站点",
        items: [
          {
            text: "群友默默的站点",
            link: "https://static-mp-00526be3-cd12-41bd-84f7-bfbce63bb7d0.next.bspapp.com/MyProject/momo.html",
          },
        ]
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
    sidebar: {
      "/overview/index.md": createPublicSiderNav(),
      "/learn": createPublicSiderNav(),
      "/amuse": createPublicSiderNav(),
      "/utils": createPublicSiderNav(),
      "/book": createPublicSiderNav(),
      "/third": createPublicSiderNav(),
    },
    footer: {
      message: "资源来自网络搜索，侵权请联系删除",
      copyright: "Copyright © 2022-present 走我们钓鱼去",
    },
  },
});
/**
 * 创建侧边公共导航栏
 * @returns
 */
function createPublicSiderNav() {
  return [
    {
      text: "总览",
      items: [
        {
          text: "介绍",
          link: "/overview/index.md",
        },
      ],
    },
    {
      text: "学习资源",
      collapsible: true,
      collapsed: true,
      items: learn(),
    },
    {
      text: "娱乐",
      collapsible: true,
      collapsed: true,
      items: amuse(),
    },
    {
      text: "工具",
      collapsible: true,
      collapsed: true,
      items: utils(),
    },
    {
      text: "书源",
      items: [
        {
          text: "书源",
          link: "/book/booksource.md",
        },
      ],
    },
    {
      text: "第三方资源站点链接",
      items: [
        {
          text: "第三方资源站点链接",
          link: "/third/index.md",
        },
      ],
    },
    {
      text: "群友分享",
      items: [
        {
          text: "群友默默的分享",
          link: "https://static-mp-00526be3-cd12-41bd-84f7-bfbce63bb7d0.next.bspapp.com/MyProject/momo.html",
        },
      ],
    },
    {
      text: "交流群",
      items: [
        {
          text: "交流群",
          link: "/CommunicationGroup/index.md",
        },
      ],
    },
  ];
}
/**
 * 工具
 * @returns
 */
function utils() {
  return [
    {
      text: "图片与视频处理",
      link: "/utils/picture.md",
    },
    {
      text: "简历编辑",
      link: "/utils/resume.md",
    },
    {
      text: "Typora笔记工具",
      link: "https://typoraio.cn/releases/all",
    },
    {
      text: "snipaste截图工具",
      link: "https://www.snipaste.com/",
    },
    {
      text: "编程类客户端工具",
      link: "/utils/programming_utils.md",
    },
    {
      text: "AI工具",
      link: "/utils/ai.md",
    },
    {
      text: "搜索引擎",
      link: "/utils/search.md",
    },
    {
      text: "白嫖资源",
      link: "/utils/piao.md",
    },
    {
      text: "在线文件共享",
      link: "https://www.wenshushu.cn/",
    },
    {
      text: "V-P-N",
      link: "https://xrelay.net/#/register?code=q8RiaKoF",
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
      text: "阅读",
      link: "/amuse/read.md",
    },
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
      text: "支付宝扫一扫领取红包",
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
    {
      text: "数学乐",
      link: "https://www.shuxuele.com/index.html",
    },
    {
      text: "文学",
      items: literature(),
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
      text: "基石",
      link: "/learn/program/cornerstone.md",
    },
    {
      text: "编辑器IDE",
      link: "/learn/program/ide.md",
    },
    {
      text: "前端",
      link: "/learn/program/web.md",
    },
    {
      text: "后端",
      link: "/learn/program/serve.md",
    },
    {
      text: "快查",
      link: "https://wangchujiang.com/reference/",
    },
    {
      text: "技能扩展",
      link: "/learn/program/expand.md",
    },
    {
      text: "编程知识速查手册",
      link: "https://lets-go-fishing.gitee.io/quick-check/",
    },
    {
      text: "书栈网 开源编程书籍",
      link: "https://www.bookstack.cn/",
    },
    {
      text: "搬书匠 开源编程书籍",
      link: "http://www.banshujiang.cn/",
    },
    {
      text: "github开源项目",
      link: "https://hellogithub.com/",
    },
  ];
}
/**
 * 文学
 * @returns
 */
function literature() {
  return [
    {
      text: "全历史",
      link: "https://www.allhistory.com/",
    },
    {
      text: "微软爱写作",
      link: "http://aimwriting.mtutor.engkoo.com/",
    },
  ];
}
