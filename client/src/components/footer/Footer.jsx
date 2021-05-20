import React from 'react';
import './Footer.css';

import { Button } from 'antd';

export default function Footer() {
  return <div className='footer'>
      <Button >About</Button>
      <Button >Contact</Button>
      <Button>Careers</Button>
    </div>
}