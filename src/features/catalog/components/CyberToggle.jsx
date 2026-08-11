import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CyberToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      style={{
        width: '60px',
        height: '30px',
        backgroundColor: isOn ? '#00FFCC' : '#333',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        justifyContent: isOn ? 'flex-end' : 'flex-start',
        boxShadow: isOn ? '0 0 15px rgba(0,255,204,0.5)' : 'inset 0 2px 5px rgba(0,0,0,0.5)'
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          width: '22px',
          height: '22px',
          backgroundColor: '#FFF',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
}
