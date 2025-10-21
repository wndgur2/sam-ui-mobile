type Props = {
    children: React.ReactNode;
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
    wrapperAttributes?: React.HTMLAttributes<HTMLDivElement>;
};
export declare function ModalProvider({ children, wrapperAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
