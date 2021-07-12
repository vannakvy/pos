import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const HtmlTooltip = withStyles((theme) => ({
 arrow: {
  color: '#546e7a',
 },
 tooltip: {
  backgroundColor: '#546e7a',
  color: 'rgba(0, 0, 0, 0.87)',
  maxWidth: 220,
  fontSize: theme.typography.pxToRem(12),
  border: '1px solid #dadde9',
 },
}))(Tooltip);

export default function TootipProfile(props) {
 const { img, name, position } = props;
 return (
  <div>
   <HtmlTooltip
    arrow
    placement="left"
    title={
     <React.Fragment>
      <div className="kh m-2 text-center text-light">
       <strong className="d-block mb-2">គ្រូ : {name}</strong>
       <b>{position}</b>
      </div>
     </React.Fragment>
    }
   >
    <img className="img-fluid" src={img} alt="" />
   </HtmlTooltip>
  </div>
 );
}
