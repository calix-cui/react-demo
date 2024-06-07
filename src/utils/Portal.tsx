import { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  attach?: HTMLElement | string;
  children: React.ReactNode;
}

const getAttach = (attach: PortalProps["attach"]) => {
  if (typeof attach === "string") {
    return document.querySelector(attach);
  } else if (typeof attach === "object" && attach instanceof HTMLElement) {
    return attach;
  }

  return document.body;
};

const Portal = forwardRef((props: PortalProps, ref) => {
  const { attach = document.body, children } = props;

  const container = useMemo(() => {
    const el = document.createElement("div");
    el.className = `portal-wrapper`;
    return el;
  }, []);

  useEffect(() => {
    // 将 container 添加到 attach 下
    const attachedTarget = getAttach(attach);
    attachedTarget?.appendChild?.(container);

    return () => {
      attachedTarget?.removeChild?.(container);
    };
  }, []);

  // 暴露 container
  useImperativeHandle(ref, () => container);

  return createPortal(children, container);
});

export default Portal;
