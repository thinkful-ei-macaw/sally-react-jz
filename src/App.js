import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Education} from './education';
import {Employment} from './employment';
import {Contact} from './contact';

function App() {
  return (
    <div>
    <header>
      <h1>Sally Student Resume</h1>
    </header>

    <main>
      <Education />

      <Employment />

      <Contact />
    </main>
    </div>
  );
}

export default App;
