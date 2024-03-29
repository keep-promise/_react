import { createElement } from './react';
import { render, useState } from './react-dom/index-v8';

const element = createElement(
  'h1', 
  { id: 'aaa', class: 'bbb' },
  'hello react',
  createElement('div', {}, 'div')
);

console.log('element', element);

// 函数式组件
function App(props) {
  return createElement('h1', null, 'Hi', props.name);
}

// index-v7实现
const elementApp = createElement(App, { name: 'foo' });

const Counter = (props) => {
  const [count, setCount] = useState(0);
  return createElement('h1', {
    onclick: () => setCount((prev) => {
      return prev+1
    })
  }, count, createElement('div', null, props.name));
}

const elementCount = createElement(Counter, { name: 'foo' });

console.log('Counter', elementCount);

render(elementCount, document.getElementById('root'));
