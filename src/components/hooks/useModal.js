import {useState} from 'react'

export const useModal = (initialValue=false) => {
      const [isOpen, setIsOpen] = useState(initialValue);
      const [isEdit, setIsEdit] = useState(true);
      const [isCreate, setIsCreate] =useState(false)

      const openModal = () =>{setIsOpen(true)}
      const closeModal = () =>{setIsOpen(false); setIsEdit(false); setIsCreate(false)};
      return[isOpen, openModal, closeModal, isEdit, setIsEdit, isCreate, setIsCreate];
}
