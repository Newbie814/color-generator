import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Form from './components/Form';
import ColorList from './components/ColorList';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#504acc').all(10));

  const addColor = (color) => {
    console.log(color);
  };
  // toast.error('Error message');
  // toast.success('Success message');

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
