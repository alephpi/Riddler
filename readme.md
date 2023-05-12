# Riddler 谜语人

本工具用于向自然语言文本添加噪声（数据增强），其用途包括但不限于测试分类算法的鲁棒性。

> 本网页为纯前端实现，不收集任何信息，可放心使用

## 功能

以下功能作用域默认实词

- [ ] 文贵曲（自定义替换）: 无产阶级 -> 打工人

- [ ] 缺心眼（单字脱漏）: 无产阶级 -> 无阶级

- [x] 谐音梗（谐音字）: 无产阶级 -> 舞铲街机

- [x] 火星文（异体字）: 无产阶级 -> 無產階級

- [ ] 空一格：无产阶级 -> 无 产 阶 级

- [x] 小学生（拼音）: 无产阶级 -> wu chan jie ji

- [x] 海龟腔（译外）: 无产阶级 -> proletariat

- [ ] 洋泾滨（译音）: 无产阶级 -> proletariat -> 普罗达利亚 (鸡肋，暂不知如何合理实现)(phoneme to pinyin)

- [x] yyds（缩写）: 无产阶级 -> wcjj

- [ ] 抽象话（emoji）: 无产阶级 -> 你 👷👴 来 🌶️(由于已经有相关网站实现该功能，本工具暂不重复)


## 示例

### 原文

这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。你们也别来问我怎么了，利益牵扯太大，说了对你我都没好处，当不知道就行了，其余的我只能说这里面水很深，牵扯到很多东西。详细情况你们自己是很难找的，网上大部分已经删除干净了，所以我只能说懂得都懂。懂的人已经基本都获利上岸什么的了，不懂的人永远不懂，关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教，大家都藏着掖着生怕别人知道自己懂事，懂了就能收割不懂的，你甚至都不知道自己不懂。只是在有些时候，某些人对某些事情不懂装懂，还以为别人不懂。其实自己才是不懂的，别人懂的够多了，不仅懂，还懂的超越了这个范围，但是某些不懂的人让这个懂的人完全教不懂，所以不懂的人永远不懂，只能不懂装懂，别人说懂的都懂，只要点点头就行了，其实你懂的我也懂,谁让我们都懂呢,不懂的话也没必要装懂,毕竟里面牵扣扯到很多懂不了的事。这种事懂的人也没必要访出来,不懂的人看见又来问七问八,最后跟他说了他也不一定能懂,就算懂了以后也对他不好,毕竟懂的太多了不是好事。所以大家最好是不懂就不要去了解,懂太多不好。

### 噪声文本

这种shi qing见得多了，我只想s栋得都懂，不懂的我也不多借事，毕竟自Haszhi dao就好，细细品吧。你们也别lask我怎么了，Benefitqian che太大，s了对你我都没benefit，当bzd就行了，其余的我只能explain这里面水很深，牽扯d很多崬覀。详细情况你们自己湜很难找的，网上大部分已经shan chu干净了，所以我只能explaindd都懂。懂的人已经基本都huo li赏安什么的了，不懂的人永远不懂，The essential懂的人都是自己悟的，你也不指刀谁是懂的人也沒琺埥嘋，大家都藏着掖着afraid of别人zd自己懂事，懂了就ableto harvest不懂的，你甚至都补至刀自己不懂。只湜在有些sh，某些人对某些倳凊pretend to understand，还一味别人不懂。其实自己才是不懂的，别人懂的够多了，不僅懂，还懂的go beyond了这个饭喂，但是某些不懂的人讓这个懂的人完全教不懂，所以不懂的人永远不懂，只能pretend to understand，别人説懂的都懂，只要电點頭就行了，其实你懂的我也懂,谁让我们都懂呢,不懂的话也没必要装懂,毕竟li mian牵扣扯到很多懂not的事。这种事懂的人也没必要访楚赖,不懂的人see又laiwen七wen八,最hg他説了他也不一定able懂,就算懂了以后也对他部好,毕竟懂的太多了不是hao shi。所以大家最好s不懂就bu yao去le jie,懂太多not good。

 > 可以注意到其中有不少小问题，譬如英文间无空格、分词有误、拼音有误，不过既然是噪声文本了，那么这些bug可以视为feature
## 致谢 
- [segmentit](https://github.com/linonetwo/segmentit) 分词及词性标注
- [pinyin](https://github.com/hotoo/pinyin) 注音
- [ChineseHomophones](https://github.com/LiangsLi/ChineseHomophones)
- [简体中文、繁体中文与火星文对应文字的查询数据库](https://gist.github.com/Niefee/43e9cf243cd5571bfd8bbf06b3651cc3)
- 以 [Vitesse-Lite](https://github.com/antfu/vitesse-lite/) 模板开始

## 免责声明

本工具并非AIGC工具，一切内容由用户指定生成，请仔细甄别。
本工具仅限于科研用途，对用户造成的一切后果概不负责，请用户在明确使用风险的前提下使用，并全权负责。

## 许可证

MIT License
## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
