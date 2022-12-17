import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchManageArts } from "../../slices/artSlice";
import { pendingSelector } from "../../selectors/artSelector";
import { currentUserSelector } from "../../selectors/userSelector";
import SubmitForm from "./SubmitForm";
import ManageArtList from "./ManageArtList";
import CircleLoading from "../partials/CircleLoading";
import useStyles from "./styles";
import addImage from "../../public/add-image.png";

const ArtManage = () => {
  const initState = {
    title: "",
    url: "",
  };

  const [art, setArt] = useState(initState);

  const styles = useStyles();

  const pending = useSelector(pendingSelector);

  const author = useSelector(currentUserSelector);

  const [isEdit, setIsEdit] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [artsList, setArtsList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchManageArts(author._id)).then((data) =>
      setArtsList(data.payload.data.data)
    );
  }, [dispatch]);

  const handleOpenForm = () => {
    setFormOpen(true);
    setIsEdit(false);
  };

  return (
    <>
      {!pending ? (
        <>
          <SubmitForm
            editId={editId}
            isOpen={formOpen}
            setIsOpen={setFormOpen}
            authorId={author._id}
            art={art}
            setArt={setArt}
            initState={initState}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
          />
          <div className={styles.container}>
            <div onClick={handleOpenForm} className={styles.addButton}>
              <img src={addImage} alt={addImage} />
            </div>
            <div className={styles.table}>
              <ManageArtList
                setEditId={setEditId}
                setIsEdit={setIsEdit}
                artsList={artsList}
                authorId={author._id}
                setArt={setArt}
                setArtsList={setArtsList}
                setFormOpen={setFormOpen}
              />
            </div>
          </div>
        </>
      ) : (
        <CircleLoading />
      )}
    </>
  );
};

export default ArtManage;
