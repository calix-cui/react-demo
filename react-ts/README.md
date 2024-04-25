# React 组件常用的类型

- ReactNode：JSX 的类型，一般用 ReactNode，但要知道 ReactNode、ReactElement、JSX.Element 的关系

- FunctionComonent：也可以写 FC，第一个类型参数是 props 的类型

- useRef 的类型：传入 null 的时候返回的是 RefObj，current 属性只读，用来存 html 元素；不传 null 返回的是 MutableRefObj，current 属性可以修改，用来存普通对象。

- ForwardRefRenderFunction：第一个类型参数是 ref 的类型，第二个类型参数是 props 的类型。forwardRef 和它类型参数一样，也可以写在 forwardRef 上

- useReducer：第一个类型参数是 Reducer<data 类型, action 类型>，第二个类型参数是初始化函数的参数类型。

- PropsWithChildren：可以用来写有 children 的 props

- CSSProperties： css 样式对象的类型

- HTMLAttributes：组件可以传入 html 标签的属性，也可以指定具体的 ButtonHTMLAttributes、AnchorHTMLAttributes。

- ComponentProps：类型参数传入标签名，效果和 HTMLAttributes 一样

- EventHandler：事件处理器的类型