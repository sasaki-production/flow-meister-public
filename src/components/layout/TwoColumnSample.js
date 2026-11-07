import { Children } from 'react';
import Sidebar from './Sidebar';


export default function TwoColumnSample({ children }) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px' }}>
        <p
          style={{ color: '#333', backgroundColor: '#ddd [', padding: '40px' }}
        >
          {children}
        </p>
        <div style={{ color: '#333', backgroundColor: '#fff', padding: '40px 20px' }}>
         <Sidebar/>
        </div>
      </div>
    </>
  );
}
