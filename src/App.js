import React from 'react';
import AddNote from './components/AddNote';
import EditMode from './components/EditMode';
import Notes from './components/Notes';
import ViewMode from './components/ViewMode';
import './sass/App.scss';
export default class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      notes:[],
      textarea:"This is a note \r\n===========\r\nSubtitle\r\n------------\r\nShopping list:\n\n* apples \n* oranges \n* toilet paper \n* \n* \n* ",
      createMode: false,
      viewMode: false,
      editMode: false,
      viewContent:{
        content:"",
        id: null
      },   
    }
  }
  componentDidMount = () => {
    const notes= JSON.parse(localStorage.getItem("notes"))
    this.setState({notes:notes}) 
  } 
  saveToLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  }
  addNewNote = () => {
    this.setState({createMode: true})
  }
  onChangeTextarea = (e) => {
    const value= e.target.value
    this.setState({textarea: value}) 
  }
  backButtonEvent = () => {
    this.setState({createMode:false})
    this.setState({viewMode: false})
    this.setState({viewContent:{
      content:"",
      id:null
    }})
    this.setState({editMode:false})
  }
  saveNewNote = () => {
    this.setState({
      notes: [
        ...this.state.notes, this.state.textarea
      ]
    }, this.saveToLocalStorage)
    this.setState({createMode:false})
    this.setState({textarea: "This is a note \r\n===========\r\nSubtitle\r\n------------\r\nShopping list:\n\n* apples \n* oranges \n* toilet paper \n* \n* \n* "})
  }
  viewNote = (e) => {
    this.setState({viewMode:true})
    const id = e.currentTarget.id;
    this.setState({viewContent: {
      content: this.state.notes[id], id:id}}) 
  } 
  deleteNote = () => {
    const notes = [...this.state.notes]
    const newNotes = notes.filter((note, index) => {
      return note[index] !== note[this.state.viewContent.id]
    })
    this.setState({notes: newNotes},this.saveToLocalStorage)
    this.setState({viewMode: false})
    this.setState({editMode:false})
    this.setState({viewContent:{
      content:"",
      id:null
    }})   
  }
  editNote = () => {
    this.setState({editMode: true})
    this.setState({viewMode: false})
  }
  updateNote = () => {
    const updateNotes = this.state.notes.slice()
    updateNotes[this.state.viewContent.id] = this.state.textarea
    this.setState({notes: updateNotes}, this.saveToLocalStorage)
    this.setState({viewMode:false})
    this.setState({editMode:false})
    this.setState({viewContent:{
      content:"",
      id:null
    }})
    this.setState({textarea: "This is a note \r\n===========\r\nSubtitle\r\n------------\r\nShopping list:\n\n* apples \n* oranges \n* toilet paper \n* \n* \n* "})
  }
  render() {     
    return(
      <>
      <header className="app-header">
        <h1>Notes app</h1>
      </header>

      <main  className="container">
        <AddNote onClick= {this.addNewNote} value={"+"}/>
        <Notes value={this.state.notes} onClick={this.viewNote}/> 
      </main>

      {this.state.createMode &&
        <EditMode startButtonValue="Back"endButtonValue="Save" back={this.backButtonEvent} onEndClick={this.saveNewNote} onChange={this.onChangeTextarea} value={this.state.textarea}/>
      }
      {this.state.viewMode &&
        <ViewMode back={this.backButtonEvent} delete={this.deleteNote}edit={this.editNote}value={this.state.viewContent.content}/>   
      }
      {this.state.editMode &&
        <EditMode editButtonClass="edit-update" startButtonValue="Back" middleButtonValue="Update" endButtonValue="Delete" back={this.backButtonEvent}update={this.updateNote} onEndClick={this.deleteNote} value={this.state.viewContent.content} onChange={this.onChangeTextarea}/>
      }
      
      </>
    )
  }
}
