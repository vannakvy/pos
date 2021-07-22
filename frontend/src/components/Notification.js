import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HiBell } from 'react-icons/hi';
import Tooltip from '@material-ui/core/Tooltip';
import ConvertNum from './eLearningComponents/ConvertNum';

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = () => (
 <Dropdown
  icon={null}
  text={
   <>
    <HiBell
     className="rounded-circle"
     style={{ fontSize: 37, padding: 10, background: 'rgb(230,230,230)' }}
    />
    <small
     className="bg-danger text-light text-center position-absolute rounded-circle"
     style={{ width: 19, left: 20, top: -2 }}
    >
     <ConvertNum num={9} />
     &#8314;
    </small>
   </>
  }
 >
  <Dropdown.Menu
   className="mt-3 bg-light"
   direction="left"
   style={{
    width: '300px',
    maxHeight: '500px',
    overflowY: 'auto',
   }}
  >
   <p className="px-3 pt-3 kh">ព័ត៌មានផ្សេងៗ</p>
   <Dropdown.Item
    text={
     <div className="d-flex">
      <div
       className="rounded-circle mt-1 me-2"
       style={{ width: '40px', overflow: 'hidden' }}
      >
       <img
        className="w-100"
        src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
       />
      </div>
      <div>
       <h5 className="kh">ដដសថ</h5>
       <p className="kh">កដថេ</p>
      </div>
     </div>
    }
   />
   <Dropdown.Item text="Save as..." description="ctrl + s" />
   <Dropdown.Item text="Rename" description="ctrl + r" />
   <Dropdown.Item text="Make a copy" />
   <Dropdown.Item icon="folder" text="Move to folder" />
   <Dropdown.Item icon="trash" text="Move to trash" />
   <Dropdown.Divider />
   <Dropdown.Item text="Download As..." />
   <Dropdown.Item text="Publish To Web" />
   <Dropdown.Item text="E-mail Collaborators" />
  </Dropdown.Menu>
 </Dropdown>
);

export default DropdownExampleDropdown;
