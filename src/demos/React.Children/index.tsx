import React, { FC, PropsWithChildren, ReactNode } from "react";

interface RowListProps {
  children?: React.ReactNode;
}

const Children: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="row-list">
      {React.Children.map(children, (item) => {
        return <div className="row">{item}</div>;
      })}
    </div>
  );
};
export default Children;

// Children 的替代方案1 自由组合组件
export function RowList(props: PropsWithChildren) {
  const { children } = props;

  return <div className="row-list">{children}</div>;
}

export function Row(props: PropsWithChildren) {
  const { children } = props;

  return <div className="row">{children}</div>;
}

interface RowList2Props {
  rows: Array<{
    id: string;
    content: ReactNode;
  }>;
}

// Children 的替代方案2 接受数组参数
export function RowList2(props: RowList2Props) {
  const { rows } = props;

  return (
    <div className="row-list">
      {rows.map((row) => (
        <div className="row" key={row.id}>
          {" "}
          {row.content}{" "}
        </div>
      ))}
    </div>
  );
}
