import { useEffect, useRef } from 'react';
import './Modal.css';

type Props = {
  setIsOpenModal: (isOpen: boolean) => void;
};

export function Modal({ setIsOpenModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const timeoutRef = useRef<number | null>(null);

  /*Clear timeout if the component is unmounted*/
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlecloseModal = () => {
    /*If modalRef is null, do nothing*/
    if (!modalRef.current) return;

    /*Clear any existing timeout*/
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    modalRef.current.classList.replace('fadeIn', 'fadeOut');

    timeoutRef.current = setTimeout(() => {
      setIsOpenModal(false);
    }, 500);
  };

  return (
    <div className='Modal fadeIn' ref={modalRef}>
      <div className='modal-content' role='dialog' aria-modal='true'>
        <h2>Modal Title</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit ipsam
          aperiam voluptates suscipit rem, distinctio voluptatum laudantium non, voluptas
          quasi inventore cupiditate accusantium optio dolore modi. Reprehenderit quod
          laborum tempora consectetur, dignissimos exercitationem nisi ex veritatis
          provident fuga vitae laboriosam sed tempore quibusdam architecto molestias
          accusamus illum perspiciatis. Explicabo odit pariatur officiis iste, asperiores
          modi, numquam error ab neque non enim aliquid aut nulla. Quo modi, molestiae
          fuga dolor nulla dolores necessitatibus sed deleniti ducimus eveniet tenetur,
          atque assumenda ratione. Quis porro ipsam praesentium atque magni optio quos
          quidem temporibus deserunt quisquam in doloremque explicabo, illo blanditiis,
          libero perspiciatis!
        </p>

        <button className='btn-close-modal' onClick={handlecloseModal}>
          X
        </button>
      </div>
    </div>
  );
}
