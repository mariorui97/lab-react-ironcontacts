import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts)

  function handleAddClick() {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const newContact = contacts[randomIndex]

    setContacts([newContact, ...contacts])
  }

  function handleSortPopularityClick() {
    contacts.sort((a, b) => b.popularity - a.popularity)
    setContacts([...contacts])
  }

  function handleSortNameClick() {
    contacts.sort((a, b) => ('' + a.name).localeCompare(b.name))
    setContacts([...contacts])
  }

  function handleDeleteClick(id) {
    const filteredContacts = contacts.filter(contact => contact.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
        <button 
          onClick={handleAddClick}
          style={{padding: '30px'}}
        >
        Add random contact
        </button>

        <button 
          onClick={handleSortPopularityClick}
          style={{padding: '30px'}}
        >
        Sort by Popularity
        </button>

        <button 
          onClick={handleSortNameClick}
          style={{padding: '30px'}}
        >
        Sort by Name
        </button>


        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact, index) => {
                return(
                  <tr key={contact.id + index}>
                    <td><img src={contact.pictureUrl} alt="" height="100"/></td>
                    <td><p>{contact.name}</p></td>
                    <td><p>{contact.popularity}</p></td>
                    <td><p>{contact.wonOscar ? '🏆' : ''}</p></td>
                    <td><p>{contact.wonEmmy ? '🏆' : ''}</p></td>
                    <td>
                      <button 
                        onClick={() => handleDeleteClick(contact.id)}
                        style={{backgroundColor: 'blue', padding: '15px'}}
                      >
                       Delete 
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;