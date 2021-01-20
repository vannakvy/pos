import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { addDetail } from "../actions/EbookAction";
import { useParams, useHistory } from "react-router-dom";
import { updateDetail } from "../actions/EbookAction";
const CkEditor = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  var url = window.location.href;
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { loading, success, detail } = useSelector((state) => state.oneDetail);

  const handleSubmit = () => {
    if (queryString === "add") {
      dispatch(addDetail(title, contents, id));
    } else {
      dispatch(updateDetail(title, contents, detail._id));
    }

    setTitle("");
    setContents("");

    setTimeout(() => {
      history.push(`/admin/details/${id}`);
    }, 100);
  };

  const handleCkEditorState = (event, editor) => {
    const data = editor.getData();
    setContents(data);
  };
  useEffect(() => {
    if (detail && queryString !== "add") {
      setTitle(detail.title);
      setContents(detail.contents);
    }
  }, [detail]);

  return <div className="container_fluid"></div>;
};

export default CkEditor;
