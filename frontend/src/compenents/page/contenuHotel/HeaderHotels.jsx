import React from 'react';
import { BiPlus } from 'react-icons/bi';
import ModalHotel from './ModalHotel';
import HeaderSidebar from '../HeaderSidebar';

function HeaderHotels() {
  const title = 'Hôtels';

  const button = (
    <button
      className="btn p-2"
      id="createHotelButton"
      data-bs-toggle="modal"
      data-bs-target="#createHotelModal"
    >
      <BiPlus className="fs-4" />
      Créer un nouveau hôtel 
      <ModalHotel />
    </button>
  );

  return (
    <HeaderSidebar title={title} button={button} />
  );
}

export default HeaderHotels;
