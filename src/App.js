import { List } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [datas,setDatas] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const addDatas = (newData) => {
    const newDatas = [...datas,newData];
    // console.log(newDatas);
    setDatas(newDatas);
  }

  return (
    <div className="App">
      <Header />
      <div className='row'>
      <div className='col'>
      <ContactForm fnAdd={addDatas}/>
      </div>
      <div className='col'>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor:"#D6EFE5" }} >
      {
        datas.map((data,i) => (
          <Contact  key={i} data={data} />
        ))
      }
      </List>
      </div>
      </div>
      
    </div>
  );
};

export default App;
