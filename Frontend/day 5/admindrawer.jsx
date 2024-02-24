import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const AdminDrawer = ({ onItemClick }) => {
  const [state, setState] = React.useState({ left: false });
    const navigate = useNavigate();
    

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleItemClick = (text) => {

    console.log('Item Clicked:', text);
    // Call the provided onItemClick function, if available
    if (onItemClick) {
      onItemClick(text);
    }

    // Navigate to the clicked page
    if (text === 'Users Details') {
        navigate('/userdetails');
      }
    else if (text === 'Jobs') {
        navigate('/deletejobs');
      }
    else if (text === 'Add Jobs') {
        navigate('/add');
      }
    else if (text === 'Update status') {
        navigate('/update');
      }
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
      <List>
        {['Users Details', 'Jobs', 'Add Jobs', 'Update status'].map((text, index) => (
          <ListItem key={text} disablePadding>
           <ListItemButton onClick={() =>handleItemClick(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['Update vacancy', 'Feedbacks', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  ); 

  return (
    <div>
    <div className="drawer-container"></div>
      <Button style={{ fontSize: '24px', cursor: 'pointer' }} onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </Button>
      
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

AdminDrawer.propTypes = {
  onItemClick: PropTypes.func,
};

export default AdminDrawer;