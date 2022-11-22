import { useLayoutEffect, useEffect, useState, useRef } from "react"
import { useIsomorphicLayoutEffect } from 'ahooks'
import ReactDOM from "react-dom"
import "./modal.module.scss"

const Modal = (props) => {  // 第一次渲染dom 走生命周期  还会在渲染拿值
  const { visible, children } = props;
  const elRef = useRef()

  const close = (ev) => {
    if (ev.target === ev.currentTarget) {
      props.onClose()
    }
  }

  useIsomorphicLayoutEffect(() => {
    const modalRoot = document.createElement('div')
    modalRoot.style = 'display:none;'
    document.body.appendChild(modalRoot)
    elRef.current = modalRoot

    return () => {
      const el = elRef.current
      if (el) {
        document.body.removeChild(el)
      }
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (elRef.current) {
      elRef.current.style = visible ? `
        display: block;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        backdrop-filter: blur(8px);` : 'display:none'
    }
  }, [visible])

  if (!props.visible) return null  // false 就返回null

  return ReactDOM.createPortal((
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} onClick={close}>{children}</div>
  ), elRef.current);
}

export default Modal
