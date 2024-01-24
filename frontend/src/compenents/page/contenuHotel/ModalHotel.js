import React from 'react';
import { BiPlus } from 'react-icons/bi';
import button from '../button';
import MenuModal from './MenuModal';

function ModalHotel(props) {
    return (
        <div>
            <div className={`modal fade ${props.show ? "show" : ""}`}
                id="createHotelModal" tabIndex="-1"
                data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn p-2" data-bs-dismiss="modal">
                                <BiPlus className="fs-4" />
                                Créer un nouveau hôte
                            </button>
                            <button style={{outline: 'none', border: 'none'}}
                                type="button"
                                className="btn-close"
                                onClick={props.onHide}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* MenuModal */}
                            <MenuModal />
                        </div>
                        <div className="modal-footer border-none">
                            <div className="col-3">
                                <button id={"footerbutton"} text={"Enrégistré"} click={props.onHide} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalHotel;
