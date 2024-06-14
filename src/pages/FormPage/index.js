// App.js
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// import from slice
import { openForm, resetStep } from "../../reducers/FormSlice";

// import css
import "./style.scss";

// import components
import Overlay from "../../components/Overlay";
import NewProjectPopup from "../../components/Popups/NewProjectPopup";
import Form1 from "../../components/Form1";

function FormPage() {
  const isFormOpen = useSelector((state) => state.forms.showForm);
  const showAddedProject = useSelector(
    (state) => state.forms.showNewProjectPopup
  );
  const dispatch = useDispatch();

  const handleOpenForm = () => {
    dispatch(openForm());
    dispatch(resetStep());
  };

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isFormOpen]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <button onClick={handleOpenForm} className="add-project-btn">
        Create New Project
      </button>
      {isFormOpen && <Form1 />}
      {isFormOpen && <Overlay />}
      {showAddedProject && <Overlay />}
      {showAddedProject && <NewProjectPopup />}
    </div>
  );
}

export default FormPage;
