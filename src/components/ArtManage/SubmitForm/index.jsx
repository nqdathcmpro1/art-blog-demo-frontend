import React, { memo, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Prompt from "../../partials/Prompt";
import { createArt, editArt } from "../../../slices/artSlice";
import useStyles from "./styles";
import defaultImage from "../../../public/upload-image.png";

const SubmitForm = ({
  editId,
  authorId,
  art,
  setArt,
  isEdit,
  setIsEdit,
  initState,
  isOpen,
  setIsOpen,
}) => {
  const promptForm = {
    form: "addAndEdit",
    promptTitle: `Are you sure you want to ${isEdit ? "edit" : "create"} ${
      art.title || "this artwork"
    } ?`,
    promptContent:
      'Make sure you have already checked all of your information before pressing "OK".',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const styles = useStyles();

  const containerRef = useRef();
  const formRef = useRef();

  const [openPrompt, setOpenPrompt] = useState(false);

  useEffect(() => {
    document.title = "Manage | ArtStudio";
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.addEventListener("click", (e) => {
        if (
          e.path.includes(containerRef.current) &&
          !e.path.includes(formRef.current)
        )
          handleCancel();
      });
    }
    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleAddSubmit = async (id, art) => {
    const { payload } = await dispatch(createArt({ id, ...art }));
    navigate(`/art/${payload.data.data._id}`);
  };

  const handleEditSubmit = async (id, art) => {
    const {payload }= await dispatch(editArt({ id, ...art }));
         navigate(`/art/${payload.data.data._id}`);
  };

  const handleCancel = async () => {
    await setArt(initState);
    await setIsEdit(false);
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      handleEditSubmit(editId, art);
    } else {
      handleAddSubmit(authorId, art);
    }
  };

  const handlePrompt = (e) => {
    e.preventDefault();
    if (art.url) setOpenPrompt(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const convertBaseUrl = (url) => {
    const reader = new FileReader();
    if (url) reader.readAsDataURL(url);

    reader.onload = () => {
      setArt({ ...art, url: reader.result });
    };
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.container} ref={containerRef}>
          <form
            id={promptForm.form}
            className={styles.submitForm}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className={styles.imageContainer}>
              <label htmlFor="upload">
                <img
                  className={styles.previewImg}
                  src={art.url || defaultImage}
                  alt={art.url}
                />
              </label>
              <input
                type="file"
                id="upload"
                accept="image/x-png,image/gif,image/jpeg"
                className={styles.fileUpload}
                onChange={(e) => {
                  convertBaseUrl(e.target.files[0]);
                }}
              />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.titleInputContainer}>
                <label className={styles.titleInputLabel} htmlFor="title">
                  {isEdit ? "Edit art" : "Add new art"}
                </label>
                <input
                  id="title"
                  className={styles.titleInput}
                  placeholder="Title"
                  value={art.title}
                  onChange={(e) => {
                    setArt({ ...art, title: e.target.value });
                  }}
                />
              </div>

              {isEdit ? (
                <div className={styles.editButtons}>
                  <button
                    form={promptForm.form}
                    className={styles.buttons}
                    onClick={handlePrompt}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className={styles.buttons}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className={styles.editButtons}>
                  <button
                    form={promptForm.form}
                    className={styles.buttons}
                    onClick={handlePrompt}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className={styles.buttons}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <Prompt
              isOpen={openPrompt}
              setIsOpen={setOpenPrompt}
              form={promptForm.form}
              promptTitle={promptForm.promptTitle}
              promptContent={promptForm.promptContent}
            />
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(SubmitForm);
