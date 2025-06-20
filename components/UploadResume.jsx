import React from 'react';
import { motion } from 'framer-motion';

const UploadResume = ({ showModal, closeModal }) => {
  return (
    <motion.div
      className={`custom_modal fade ${showModal ? 'show' : ''}`}
      id="upload-resume"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="resumeupload"
      aria-hidden={!showModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: showModal ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeModal}
    >
      <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
        <div className="modal-content" id="resumeupload">
          <div className="modal-header">
            <h4>Upload Resume</h4>
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true"><i className="ti-close"></i></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form>
                <div className="form-row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>E-Mail ID</label>
                      <input type="email" className="form-control" placeholder="ucicl@gmail.com" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Paste Your Resume</label>
                  <textarea className="form-control ht-150" placeholder="Copy & Paste Resume"></textarea>
                </div>
                <div className="form-group">
                  <label className="light">doc, docx, pdf, txt, png</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="uploadResume" />
                    <label className="custom-file-label" htmlFor="uploadResume"><i className="ti-link mr-1"></i>Upload Resume</label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn dark-2 btn-md full-width pop-login">Upload Resume</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadResume;
