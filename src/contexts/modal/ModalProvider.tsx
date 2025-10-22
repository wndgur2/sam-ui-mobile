import { createRef, useCallback, useState } from 'react'
import { Modal } from './types'
import { useModal } from '../../hooks/useModal'
import { ModalContext } from './ModalContext'
import { deepOverride } from '../../utils/deepOverride'

const MODAL_ROOT_ATTRIBUTES: React.HTMLAttributes<HTMLDivElement> = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const MODAL_BACKDROP_ATTRIBUTES: React.HTMLAttributes<HTMLDivElement> = deepOverride(
  {
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  MODAL_ROOT_ATTRIBUTES
)

type Props = {
  children: React.ReactNode
  containerAttributes?: React.HTMLAttributes<HTMLDivElement>
  backdropAttributes?: React.HTMLAttributes<HTMLDivElement>
  beforeClose?: (ref?: React.RefObject<HTMLDivElement>) => Promise<void> | void
}

export function ModalProvider({
  children,
  containerAttributes = {},
  backdropAttributes = {},
  beforeClose,
}: Props) {
  containerAttributes = deepOverride(containerAttributes, MODAL_ROOT_ATTRIBUTES)
  backdropAttributes = deepOverride(backdropAttributes, MODAL_BACKDROP_ATTRIBUTES)

  const [modals, setModals] = useState<Modal[]>([])

  const openModal = useCallback((content: React.ReactNode) => {
    const newModal = { content, ref: createRef<HTMLDivElement>() }
    setModals((prev) => {
      const newModals = [...prev, newModal]
      return newModals
    })
  }, [])

  const closeModal = useCallback(async () => {
    let top = modals[modals.length - 1]

    if (!top) return

    await beforeClose?.(top.ref)

    setModals((prev) => prev.slice(0, -1))
  }, [beforeClose, modals])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalsRenderer modals={modals} {...{ containerAttributes, backdropAttributes }} />
    </ModalContext.Provider>
  )
}

type ModalsRendererProps = {
  modals: Modal[]
  containerAttributes: React.HTMLAttributes<HTMLDivElement>
  backdropAttributes: React.HTMLAttributes<HTMLDivElement>
}

function ModalsRenderer({ modals, containerAttributes, backdropAttributes }: ModalsRendererProps) {
  const { closeModal } = useModal()

  if (modals.length === 0) return null

  const underModals = modals.slice(0, -1)
  const topModal = modals[modals.length - 1]

  return (
    <>
      <div id="modals-container" {...containerAttributes}>
        {underModals.map((modal) => (
          <div ref={modal.ref}>{modal.content}</div>
        ))}
        {
          <div
            ref={topModal.ref}
            id="modal-backdrop"
            onClick={(e) => {
              closeModal()
            }}
            {...backdropAttributes}
          >
            <div id="top-modal-wrapper" onClick={(e) => e.stopPropagation()}>
              {topModal.content}
            </div>
          </div>
        }
      </div>
    </>
  )
}
