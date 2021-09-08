import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { BiGitPullRequest } from 'react-icons/bi';

function exampleReducer(state, action) {
 switch (action.type) {
  case 'OPEN_MODAL':
   return { open: true, dimmer: action.dimmer };
  case 'CLOSE_MODAL':
   return { open: false };
  default:
   throw new Error();
 }
}

function ModalExampleDimmer(props) {
 const { setDescrip, reqEnrollCreate } = props;
 const [state, dispatch] = React.useReducer(exampleReducer, {
  open: false,
  dimmer: undefined,
 });
 const { open, dimmer } = state;

 return (
  <div>
   <button
    onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
    type="button"
    className="btn btn-block text-dark rounded-pill bg-success shadow kh"
   >
    ស្នើរសុំរៀនមុខវិទ្យានេះ
    <BiGitPullRequest style={{ fontSize: 16, marginTop: -4 }} />
   </button>

   <Modal
    className="modalDescrip"
    dimmer={dimmer}
    open={open}
    onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
    style={{
     maxHeight: 310,
     marginTop: '10%',
     maxWidth: 500,
    }}
   >
    <Modal.Header>
     {' '}
     <span className="kh">ស្នើរសុំរៀនមុខវិទ្យានេះ?</span>
    </Modal.Header>
    <Modal.Content>
     <div className="form-floating">
      <textarea
       onChange={(e) => setDescrip(e.target.value)}
       className="form-control kh"
       placeholder="Leave a comment here"
       id="floatingTextarea2"
       style={{ height: '150px' }}
      ></textarea>
      <label for="floatingTextarea2" className="kh">
       បញ្ចូលព័ត៌មាន
      </label>
     </div>
    </Modal.Content>
    <Modal.Actions>
     <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
      <span className="kh">ចាកចេញ</span>
     </Button>
     <Button
      className="bg-success"
      onClick={() => {
       reqEnrollCreate();
       dispatch({ type: 'CLOSE_MODAL' });
      }}
     >
      <span className="kh">ស្នើរសុំ</span>
     </Button>
    </Modal.Actions>
   </Modal>
  </div>
 );
}

export default ModalExampleDimmer;
