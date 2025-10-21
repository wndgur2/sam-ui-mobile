import { createContext } from 'react'
import { ModalOptions } from './types'

/** 모달을 여는 함수 시그니처 */
type OpenModal = (
  /** 모달 내부에 렌더링할 React 노드 */
  content: React.ReactNode,
  /** 모달 동작/레이아웃 옵션. @see ModalOptions */
  options?: ModalOptions
) => void

/** 모달을 닫는 함수 시그니처 */
type CloseModal = () => void

/**
 * 모달 컨텍스트 값 타입
 */
export interface ModalContextValue {
  /**
   * 새 모달을 엽니다.
   * @param content 모달 내부에 렌더링할 React 노드
   * @param options 모달 동작/레이아웃 옵션
   */
  openModal: OpenModal

  /** 가장 최근에 연 모달을 닫습니다. */
  closeModal: CloseModal
}

export const ModalContext = createContext<ModalContextValue | null>(null)
