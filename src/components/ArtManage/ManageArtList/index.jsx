import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";

import { deleteArt, fetchManageArts } from "../../../slices/artSlice";
import Prompt from "../../partials/Prompt";
import ArtList from "../../partials/ArtList";
import useStyles from "./styles";

const ManageTable = ({
  page,
  setPage,
  setIsEdit,
  setEditId,
  authorId,
  artsList,
  setArtsList,
  setArt,
  setFormOpen,
}) => {
  const [deletedArt, setDeletedArt] = useState({});
  const [promptOpen, setPromptOpen] = useState(false);

  const promptForm = {
    form: "delete",
    promptTitle: "Ohhhh... ?",
    promptContent: `Are you sure you want to delete "${deletedArt.title}" ?`,
  };

  const styles = useStyles();
  const dispatch = useDispatch();

  const handleDelete = async (deletedArt) => {
    await dispatch(deleteArt(deletedArt._id));
    await dispatch(fetchManageArts(authorId)).then((data) =>
      setArtsList(data.payload.data.data)
    );

    setPromptOpen(false);
  };

  const handlePromptDelete = async (art) => {
    setDeletedArt({ ...art });
    setPromptOpen(true);
  };

  const handleEdit = async (id) => {
    setIsEdit(true);
    setEditId(id);
    
    setFormOpen(true);
    const editArt = await artsList.find((art) => art._id === id);
    setArt({
      title: editArt.title,
      url: editArt.url,
      author: editArt.author,
    });
  };

  return (
    <>
      <Prompt
        isOpen={promptOpen}
        setIsOpen={setPromptOpen}
        form={promptForm.form}
        promptTitle={promptForm.promptTitle}
        promptContent={promptForm.promptContent}
        onAccept={() => handleDelete(deletedArt)}
      />
      <div className={styles.tableContainer}>
        {artsList.length > 0 ? (
          <ArtList
            page={page}
            setPage={setPage}
            artsList={artsList}
            isAuthorPage={true}
            handleDelete={handlePromptDelete}
            handleEdit={handleEdit}
          />
        ) : (
          <>
            <p className={styles.noArt}>(No artwork has been uploaded.)</p>
          </>
        )}
      </div>
    </>
  );
};

export default memo(ManageTable);
