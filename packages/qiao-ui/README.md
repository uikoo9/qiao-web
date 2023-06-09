## qiao-ui

[![npm version](https://img.shields.io/npm/v/qiao-ui.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ui)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ui.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ui)

简洁小巧的 react ui 框架

## install

安装

```shell
npm i qiao-ui
```

## use

使用

```javascript
// cjs
const { MobileArticle } = require('qiao-ui');

// mjs
import { MobileArticle } from 'qiao-ui';
```

## Basic

### Link

链接

- url
  - 类型: string
  - 说明: 链接
- txt
  - 类型: string
  - 说明: 文字
- blank
  - 类型: boolean
  - 说明: 是否新标签打开，默认为 false

效果

![link](https://static.insistime.com/15_insistime_code/static/qiao-ui/link.png)

代码

```javascript
<Link url={url} txt={txt} blank={true} />
```

### Button

按钮

- text
  - 类型: string
  - 说明: 文字
- onClick
  - 类型: function
  - 说明: 点击事件

效果

![button](https://static.insistime.com/15_insistime_code/static/qiao-ui/button.png)

代码

```javascript
<Button onClick={saveClick} text="submit" />
```

### CheckboxList

多选框

- text
  - 类型: string
  - 说明: 文字
- checkboxs
  - 类型: array
  - 说明: checkbox 数组
- checkboxChange
  - 类型: function
  - 说明: change 事件

效果

![checkbox-list](https://static.insistime.com/15_insistime_code/static/qiao-ui/checkbox-list.png)

代码

```javascript
<CheckboxList
  text="all ="
  checkboxs={[
    {
      name: 'npm',
      checked: true,
    },
    {
      name: 'express',
    },
  ]}
  checkboxChange={checkboxChange}
/>
```

### Input

输入框

- type
  - 类型: string
  - 说明: input 类型
- placeholder
  - 类型: string
  - 说明: 占位文字
- value
  - 类型: string
  - 说明: input value
- onChange
  - 类型: function
  - 说明: change 事件
- onKeyPress
  - 类型: function
  - 说明: key press 事件

效果

![input](https://static.insistime.com/15_insistime_code/static/qiao-ui/input.png)

代码

```javascript
<Input type="text" placeholder={'todo... @20221010'} value={todo} onChange={onChange} onKeyPress={onKeyPress} />
```

### Select

下拉框

- options
  - 类型: array
  - 说明: 下拉数组
- value
  - 类型: number
  - 说明: 选中值
- onChange
  - 类型: function
  - 说明: change 事件

效果

![select](https://static.insistime.com/15_insistime_code/static/qiao-ui/select.png)

代码

```javascript
<Select
  options={blogTypes}
  value={blogTypeId}
  onChange={(e) => {
    setBlogTypeId(e.target.value);
  }}
/>
```

## Components

### Header

页头

- center
  - 类型: boolean
  - 说明: 文字是否居中
- logo
  - 类型: string
  - 说明: 公司名称
- logoUrl
  - 类型: string
  - 说明: 公司 url
- navs
  - 类型: array
  - 说明: 导航数组

效果

![header](https://static.insistime.com/15_insistime_code/static/qiao-ui/header.png)

代码

```javascript
<Header center={true} logo={Constant.logo} logoUrl={Constant.logoUrl} navs={Constant.navs} />
```

### Footer

页脚

- companyUrl
  - 类型: string
  - 说明: 公司 url
- companyName
  - 类型: string
  - 说明: 公司名称
- beianUrl
  - 类型: string
  - 说明: 备案名称
- beianName
  - 类型: string
  - 说明: 备案名称

效果

![footer](https://static.insistime.com/15_insistime_code/static/qiao-ui/footer.png)

代码

```javascript
<Footer
  companyUrl={Constant.companyUrl}
  companyName={Constant.companyName}
  beianUrl={Constant.beianUrl}
  beianName={Constant.beianName}
/>
```

### LoginBox

登录框

- usernameHolder
  - 类型: string
  - 说明: 用户名占位
- passwordHolder
  - 类型: string
  - 说明: 用户密码占位
- loginBtn
  - 类型: string
  - 说明: 登录按钮文字
- loginSucUrl
  - 类型: string
  - 说明: 登录成功后跳转 url
- loginClick
  - 类型: function
  - 说明: 点击登录事件

效果

![login](https://static.insistime.com/15_insistime_code/static/qiao-ui/login.png)

代码

```javascript
<LoginBox
  usernameHolder={'username'}
  passwordHolder={'password'}
  loginBtn={'Login'}
  loginSucUrl={'/'}
  loginClick={loginBtnClick}
/>
```

### Menus

右侧菜单

- menus
  - 类型: array
  - 说明: 菜单数组

效果

![menus](https://static.insistime.com/15_insistime_code/static/qiao-ui/menus.png)

代码

```javascript
<Menus menus={Constant.menus} />
```

### Modal

模态框

- width
  - 类型: string
  - 说明: 模态框宽度
- show
  - 类型: boolean
  - 说明: 是否显示模态框
- closeModal
  - 类型: function
  - 说明: 关闭模态框回调

效果

![modal](https://static.insistime.com/15_insistime_code/static/qiao-ui/modal.png)

代码

```javascript
<Modal
  width="300px"
  show={show}
  closeModal={() => {
    setShow(false);
  }}
>
  ...
</Modal>
```
