import { useState } from 'react'
import './App.css';

interface AaaProps {
  name: string,
  // content: React.ReactElement // 不允许number、null
  content: React.ReactNode // 包含 ReactElement, number, null, boolean, ...
}

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return <div>aaa, {props.name} {props.content}</div>
}

function Aaa2(props: AaaProps) {
  return <div>aaa, {props.name} {props.content}</div>
}

const content: JSX.Element = <div>content</div>

function App() {
  return <div>
    <Aaa name='calix' content={content}></Aaa>
  </div>
}

export default App;
