import React from 'react'
import './App.css'
import AddTask from './components/AddTask';
import InputTask from './components/InputTask';
import SpackGrid from './components/AgGrid/SpackGrid';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className='task'>
        <InputTask/>
        <AddTask/>
        {/* AgGridを作成するCP */}
        <SpackGrid/>
      </div>
    </RecoilRoot>
  )
}

export default App
