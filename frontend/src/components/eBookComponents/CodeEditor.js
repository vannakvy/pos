import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Editor from '@monaco-editor/react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

function TabPanel(props) {
 const { children, value, index, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box className="p-2" style={{ background: 'rgb(30, 30, 30)' }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

TabPanel.propTypes = {
 children: PropTypes.node,
 index: PropTypes.any.isRequired,
 value: PropTypes.any.isRequired,
};

function a11yProps(index) {
 return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 };
}

const useStyles = makeStyles((theme) => ({
 root: {
  flexGrow: 1,
  backgroundColor: 'rgb(30, 30, 30)',
 },
}));

export default function SimpleTabs(props) {
 const classes = useStyles();
 const [value, setValue] = React.useState(0);
 const {
  contents,
  setContents,
  code,
  setCode,
  squery,
  setSquery,
  setOpenEditor,
  h,
  setH,
  handleSubmit,
  codeLiveText,
  setCodeLiveText,
 } = props;

 useEffect(async () => {
  const { data } = await axios.get(
   `/api/ebook/details/codeLive/${code.codeLive}/get`
  );
  if (data) {
   setCodeLiveText(data.content);
  }
 }, [code.codeLive]);

 const cancelMode = () => {
  setCode({ codeShow: '', codeLive: '' });
  setContents('');
  setSquery('');
  setOpenEditor(false);
  setCodeLiveText('');
 };

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 return (
  <div className={classes.root}>
   <Paper square>
    <Tabs
     value={value}
     onChange={handleChange}
     aria-label="simple tabs example"
     className="en"
    >
     <Tab label="Contents" {...a11yProps(0)} />
     <Tab label="Code Show" {...a11yProps(1)} />
     <Tab label="Code Live" {...a11yProps(2)} />
    </Tabs>
   </Paper>
   <TabPanel value={value} index={0}>
    <Editor
     className="round"
     theme="vs-dark"
     height="250px"
     options={{ formatOnPaste: true }}
     defaultLanguage="html"
     value={contents}
     onChange={(e) => setContents(e)}
    />
   </TabPanel>
   <TabPanel value={value} index={1}>
    <Editor
     className="round"
     theme="vs-dark"
     height="250px"
     defaultLanguage="html"
     options={{ formatOnPaste: true }}
     value={code.codeShow}
     onChange={(e) => setCode({ ...code, codeShow: e })}
    />
   </TabPanel>
   <TabPanel value={value} index={2}>
    <Editor
     className="round"
     theme="vs-dark"
     height="250px"
     defaultLanguage="html"
     options={{ formatOnPaste: true }}
     value={codeLiveText}
     onChange={(e) => setCodeLiveText(e)}
    />
   </TabPanel>
   <div>
    {squery === 'add' ? (
     <button
      className="btn btn-success text-dark shadow rounded m-1"
      style={{ width: '130px' }}
      onClick={() => {
       handleSubmit();
       cancelMode();
      }}
     >
      Create
     </button>
    ) : squery === 'update' ? (
     <button
      className="btn btn-secondary shadow rounded m-1"
      style={{ width: '130px' }}
      onClick={() => {
       handleSubmit();
       cancelMode();
      }}
     >
      save
     </button>
    ) : null}

    <button
     className="btn btn-dark shadow rounded m-1"
     style={{ width: '130px' }}
     onClick={() => {
      cancelMode();
     }}
    >
     cancel
    </button>
   </div>
  </div>
 );
}
