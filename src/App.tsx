import { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal/Modal';

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='App'>
      <h1>Animated Modal Close Effect in React</h1>

      <button className='btn-open-modal' onClick={() => setIsOpenModal(true)}>
        Open Modal
      </button>

      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
}
