import  'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
assethook({
  extensions: ['png', 'jpg']
});
import React from 'react';
import {renderToString} from 'react-dom/server';
import {App} from './src/app';

// 导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务器代码调用
export function render() {
  // 把根组件渲染成 HTML 字符串
  return renderToString(<App />)
}
