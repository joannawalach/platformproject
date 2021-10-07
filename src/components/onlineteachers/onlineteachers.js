import React from 'react'; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'; 
import photo1 from './../../images/avatars/1.jpg';
import photo2 from './../../images/avatars/2.jpg';
import photo3 from './../../images/avatars/3.jpg';
import photo4 from './../../images/avatars/4.jpg';
import photo5 from './../../images/avatars/5.jpg';
import photo7 from './../../images/avatars/7.jpg';

export default function Onlineteachers() {
    return (
        <div className="online_teachers">
          <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={photo1}  sx={{ width: 56, height: 56 }}/>
      <Avatar alt="Travis Howard" src={photo2}  sx={{ width: 56, height: 56 }} />
      <Avatar alt="Cindy Baker" src={photo3}  sx={{ width: 56, height: 56 }} />
      <Avatar alt="Cindy Baker" src={photo4}  sx={{ width: 56, height: 56 }}/>
      <Avatar alt="Cindy Baker" src={photo5}  sx={{ width: 56, height: 56 }}/>
      <Avatar alt="Cindy Baker" src={photo7}  sx={{ width: 56, height: 56 }}/>
    
    </Stack>
        </div>
    )
}
