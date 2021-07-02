import React, { useState } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import Editor from '@monaco-editor/react';

function TabPanel(props) {
 const { children, value, index, ...other } = props;

 return (
  <div
   className="shadow"
   role="tabpanel"
   hidden={value !== index}
   id={`full-width-tabpanel-${index}`}
   aria-labelledby={`full-width-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box p={3} style={{ height: '40vh' }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

const StyledTabs = withStyles({
 indicator: {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  '& > span': {
   maxWidth: 40,
   width: '100%',
   backgroundColor: '#635ee7',
  },
 },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
 root: {
  textTransform: 'none',
  color: '#fff',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  '&:focus': {
   opacity: 1,
  },
 },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
 root: {
  flexGrow: 1,
 },
 padding: {
  padding: theme.spacing(3),
 },
 demo1: {
  backgroundColor: theme.palette.background.paper,
 },
 demo2: {
  backgroundColor: 'rgb(30,30,30)',
 },
}));

export default function CustomizedTabs(props) {
 const { contents, setContents } = props;
 const classes = useStyles();
 const theme = useTheme();
 const [value, setValue] = React.useState(0);
 const [code, setCode] = useState('');

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 const handleChangeIndex = (index) => {
  setValue(index);
 };
 return (
  <div className={classes.root}>
   <div className={classes.demo2}>
    <StyledTabs
     className="kh"
     value={value}
     onChange={handleChange}
     aria-label="styled tabs example"
     centered
    >
     <StyledTab className="kh" label="ព័ត៌មានលំអិត" />
     <StyledTab className="kh" label="កូដដែលបង្ហាញចេញ" />
     <StyledTab className="kh" label="ប៊ូតុងសម្រាប់តែសកូដ" />
    </StyledTabs>
    <SwipeableViews
     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
     index={value}
     onChangeIndex={handleChangeIndex}
    >
     <TabPanel value={value} index={0} dir={theme.direction}>
      <Editor
       height="30vh"
       theme="vs-dark"
       defaultLanguage="html"
       value={contents}
       onChange={(e) => setContents(e)}
      />
     </TabPanel>
     <TabPanel value={value} index={1} dir={theme.direction}>
      <Editor
       height="30vh"
       theme="vs-dark"
       defaultLanguage="html"
       value={code}
       onChange={(e) => setCode(e)}
      />
     </TabPanel>
     <TabPanel value={value} index={2} dir={theme.direction}>
      <Editor
       height="30vh"
       theme="vs-dark"
       defaultLanguage="html"
       value={code}
       onChange={(e) => setCode(e)}
      />
     </TabPanel>
    </SwipeableViews>
    <div className="mx-2 pb-2">
     <button type="button" className="btn btn-success px-4 rounded kh mr-2">
      រក្សាទុក្ខ
     </button>
     <button type="button" className="btn btn-danger px-4 rounded kh mr-2">
      លុប
     </button>
     <button
      type="button"
      className="btn btn-secondary px-4 rounded kh mr-2"
      // onClick={() => {
      //  set;
      // }}
     >
      បោះបង់
     </button>
    </div>
   </div>
  </div>
 );
}
