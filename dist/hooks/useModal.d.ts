import { ModalContextValue } from '../contexts/modal/ModalContext';

/**
 * 모달 컨텍스트를 사용하기 위한 커스텀 훅
 * @throws - ModalContext.Provider로 감싸지지 않은 상태에서 호출 시 에러를 던집니다.
 *
 * {@link ModalContextValue | returns ModalContextValue}
 */
export declare function useModal(): ModalContextValue;
