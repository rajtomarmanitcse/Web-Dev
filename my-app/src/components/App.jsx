import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function onAdd(item) {
    const {title,content} = item;

    if(title !== "" || content !== "")
    setNotes(prevValue => [...prevValue, item]);
    // console.log(item , notes);
  }

  function onDelete(id){
    setNotes(prevValue => prevValue.filter((noteItem,index) => index !== id));
    
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((note, index) => (
      <Note id={index} key={index} title={note.title} content={note.content} onDelete={onDelete} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
