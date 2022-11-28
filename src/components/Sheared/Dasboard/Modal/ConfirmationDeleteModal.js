import React from 'react';

const ConfirmationDeleteModal = ({ deleteProduct, closeModal, handleDeletingProduct }) => {
    // console.log(deleteProduct);

    return (
        <div>
            <input type="checkbox" id="seller-con-dele-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure delete <span className='text-green-500'
                    >{deleteProduct?.name}</span> ?</h3>
                    <p className="py-4">If you delete {deleteProduct?.productName} product .You Can click ok button or  cancel!! </p>

                    <div className="modal-action">

                        <label  onClick={() => handleDeletingProduct(deleteProduct._id)}
                         htmlFor="seller-con-dele-modal" className="btn btn-error text-white">OK</label>

                        <button
                            onClick={closeModal}
                            className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDeleteModal;