import React, { useState } from "react";
import "./app.scss";
import { SketchPicker } from "react-color";
function App() {
  const [bgColor, setbgColor] = useState("#fff");
  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [tagValue, setTagValue] = useState("note");
  const [addNote, setAddNote] = useState({
    title: "",
    text: "",
    backgroundcolor: "#fff",
    tag: "note",
  });
  const [tags, setTags] = useState([
    {
      id: Math.random(),
      text: "note",
    },
    {
      id: Math.random(),
      text: "HTML",
    },
    {
      id: Math.random(),
      text: "CSS",
    },
    {
      id: Math.random(),
      text: "JS",
    },
  ]);
  const [addTag, setAddTag] = useState("");
  const addATag = () => {
    const newTag = tags.filter(
      (ele) => ele.text.toLowerCase() == addTag.toLowerCase()
    );
    if (newTag.length < 1) {
      const newOptionTag = {
        id: Math.random(),
        text: addTag,
      };
      console.log("hey");
      setTags([...tags, newOptionTag])
    }
  };
  const deleteTag = (id) => {
    setTags((ele) => {
      return [
        ...ele.filter((obj) => obj.id!=id)
      ]
    })
  }

  const addTodoNotes = () => {
    
  }

  return (
    <div className="notes">
      <div className="addNote">
        <h2>Add a Note</h2>
        <div
          className="card"
          style={{ backgroundColor: `${addNote.backgroundcolor}` }}
        >
          <label htmlFor="">Enter Title</label>
          <input
            type="text"
            value={addNote.title}
            placeholder="Enter the title of your note"
            onChange={(e) => setAddNote({ ...addNote, title: e.target.value })}
          />
          <label htmlFor="">Enter text</label>
          <input
            className="textInput"
            type="text"
            placeholder="Enter the text of your note"
            value={addNote.text}
            onChange={(e) => setAddNote({ ...addNote, text: e.target.value })}
          />
          <h6>
            backGround color :{" "}
            <p
              style={{
                width: "25px",
                height: "18px",
                border: "1px solid black",
                backgroundColor: `${addNote.backgroundcolor}`,
              }}
            ></p>
          </h6>
          <select
            class="form-select"
            aria-label="Default select example"
            value={tagValue.tag}
            onChange={(e) => setTagValue(e.target.value)}
          >
            {tags.map((ele) => (
              <option value={ele.text}>{ele.text}</option>
            ))}
          </select>
          <button
            type="button"
            disabled={addNote.title == "" || addNote.text == ""}
            class="btn btn-dark"
          >
            Dark
          </button>
        </div>
      </div>
      <div className="addTags">
        <h2>Add Tags</h2>
        <div className="card card2">
          <label htmlFor="">Add A Tag</label>
          <input
            type="text"
            placeholder="enter a tag"
            value={addTag}
            onChange={(e) => setAddTag(e.target.value)}
          />
          <button
            className="btn  btn-dark"
            onClick={() => addATag()}
            disabled={addTag == ""}
          >
            Add A tag
          </button>
        </div>
        <div className="deleteTag">
          {tags.map((ele) => (
            <div className="card card3">
              <span>
                {ele.text}
                <i class="fas fa-trash-alt" onClick={()=>deleteTag(ele.id)}></i>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="addTags">
        <h2>Filter Notes</h2>
      </div>
      <div className="addTags">
        <h2>Pinned Notes</h2>
      </div>
    </div>
  );
}

export default App;
