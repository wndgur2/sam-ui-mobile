import { useCallback, useState } from 'react'
import { Modal, ModalOptions } from './types'
import { useModal } from '../../hooks/useModal'
import { ModalContext } from './ModalContext'

const DEFAULT_MODAL_WRAPPER_ATTRIBUTES: React.HTMLAttributes<HTMLDivElement> = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

type Props = {
  children: React.ReactNode
  /**
   * Attributes for the modal wrapper element.
   * @defaultValue
    ```
    {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }
    ```
   */
  wrapperAttributes?: React.HTMLAttributes<HTMLDivElement>
}

export function ModalProvider({
  children,
  wrapperAttributes = DEFAULT_MODAL_WRAPPER_ATTRIBUTES,
}: Props) {
  const [modals, setModals] = useState<Map<number, Modal[]>>(new Map())

  const openModal = useCallback((content: React.ReactNode, { z = 1 }: ModalOptions = {}) => {
    const newModal = { content }
    setModals((prev) => {
      const newModals = new Map<number, Modal[]>(prev)
      const prevModalsAtZ = prev.get(z)
      if (prevModalsAtZ) newModals.set(z, [newModal, ...prevModalsAtZ])
      else newModals.set(z, [newModal])
      return newModals
    })
  }, [])

  const closeModal = useCallback(() => {
    setModals((prev) => {
      const newModals = new Map<number, Modal[]>(prev)
      console.log('version2')
      const maxZ = Math.max(...Array.from(newModals.keys()))
      const updatedModalsAtZ = newModals.get(maxZ)!.slice(1)
      if (updatedModalsAtZ.length > 0) newModals.set(maxZ, updatedModalsAtZ)
      else newModals.delete(maxZ)
      return newModals
    })
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalsRenderer modals={modals} {...wrapperAttributes} />
    </ModalContext.Provider>
  )
}

type ModalsRendererProps = {
  modals: Map<number, Modal[]>
} & React.HTMLAttributes<HTMLDivElement>

function ModalsRenderer({ modals, ...rest }: ModalsRendererProps) {
  const sortedZs = Array.from(modals.keys()).sort((a, b) => a - b)
  const { closeModal } = useModal()

  return (
    <>
      {sortedZs.map((z) =>
        modals.get(z)!.map((modal, index) => (
          <div
            key={`modal-${z}-${index}`}
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            {...rest}
          >
            <div onClick={(e) => e.stopPropagation()}>{modal.content}</div>
          </div>
        ))
      )}
    </>
  )
}
