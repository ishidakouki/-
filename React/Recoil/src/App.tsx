import React from 'react'
import './App.css'
import AddTask from './components/AddTask';
import InputTask from './components/InputTask';
import SparkGrid from './components/AgGrid/SparkGrid';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className='task'>
        <InputTask/>
        <AddTask/>
        <SparkGrid/>
      </div>
    </RecoilRoot>
  )
}

export default App
