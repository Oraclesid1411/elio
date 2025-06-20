import React from 'react';
import { motion } from 'framer-motion';

const Auth = ({ showModal, closeModal }) => {
  return (
    <motion.div
      className={`custom_modal fade ${showModal ? 'show' : ''}`}
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registermodal"
      aria-hidden={!showModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: showModal ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeModal}
    >
      <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
        <div className="modal-content" id="registermodal">
          <div className="modal-header">
            <h4>Sign In</h4>
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true"><i className="ti-close"></i></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="*******" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn dark-2 btn-md full-width pop-login">Login</button>
                </div>
              </form>
            </div>
            <div className="form-group text-center">
              <span>Or Sign in with</span>
            </div>
            <div className="social_logs mb-4">
              <ul className="shares_jobs text-center">
                <li><a href="#" className="share fb"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="share gp"><i className="fa fa-google"></i></a></li>
                <li><a href="#" className="share ln"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <div className="mf-link"><i className="ti-user"></i> Haven't An Account? <a href="javascript:void(0)" className="theme-cl">Sign Up</a></div>
            <div className="mf-forget"><a href="#"><i className="ti-help"></i> Forget Password</a></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Auth;
