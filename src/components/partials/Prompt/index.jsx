import React, { useEffect, useRef } from "react";

import useStyles from "./styles";

const Prompt = ({
  promptTitle,
  promptContent,
  isOpen,
  setIsOpen,
  form,
  onAccept,
}) => {
  const styles = useStyles();

  const promptRef = useRef();
  const containerRef = useRef();
  const clickRef = useRef(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (clickRef.current && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("click", (e) => {
        if (
          e.path.includes(containerRef.current) &&
          !e.path.includes(promptRef.current)
        )
          handleClose();
      });
    }
    return () => {
      clickRef.current = true;
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={styles.container} ref={containerRef}>
          <div className={styles.promptContainer} ref={promptRef}>
            <div className={styles.promptHeader}>
              <li className={styles.promptTitle}>{promptTitle}</li>
            </div>
            <div className={styles.promptBody}>
              <li className={styles.promptContent}>{promptContent}</li>
            </div>
            <div className={styles.promptButton}>
              <button
                type={onAccept ? "button" : "submit"}
                form={form}
                className={`${styles.button} ${styles.submitButton}`}
                onClick={onAccept || null}
              >
                OK
              </button>
              <button
                onClick={handleClose}
                className={`${styles.button} ${styles.closeButton}`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Prompt;
