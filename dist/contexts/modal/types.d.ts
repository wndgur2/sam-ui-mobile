export type Modal = {
    content: React.ReactNode;
};
export type ModalOptions = {
    /**
     * @param z Z-index of the modal. Higher values will be displayed on top of lower values.
     * @defaultValue 1
     */
    z?: number;
};
