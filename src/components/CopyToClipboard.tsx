import copy from "copy-to-clipboard";
import { Children, FC, ReactElement, cloneElement } from "react";

interface CopyToClipboardProps {
  text: string;
  onCopy?: (text: string, result: boolean) => void;
  children: ReactElement;
  options?: {
    debug?: boolean;
    message?: string;
    format?: string;
  };
}

const CopyToClipboard: FC<CopyToClipboardProps> = (props) => {
  const { text, onCopy, children, options } = props;

  const element = Children.only(children);

  function onClick(event: MouseEvent) {
    const element = Children.only(children);

    const result = copy(text, options);

    if (onCopy) {
      onCopy(text, result);
    }

    if (typeof element?.props?.onClick === "function") {
      element.props.onClick(event);
    }
  }

  return cloneElement(element, { onClick });
};

export default CopyToClipboard;
