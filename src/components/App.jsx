import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
  const [allNotes, setAllNotes] = useState([]);

  function addNote(note){
    setAllNotes(prev => {
      return [...prev, note];
    })
  };

  function deleteItem(id){
    setAllNotes(prev => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        <Note key={-1} title="Note title" content="Note content" />
        {allNotes.map((note, index) => {
          return (
            <Note 
              key={index}
              id = {index}
              title = {note.title}
              content = {note.content}
              deleteFunc={deleteItem}
            />
          );
        })}
        <Footer />
      </div>
  );
}

export default App;