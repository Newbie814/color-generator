import { useState } from 'react';

import Form from './components/Form';
import ColorList from './components/ColorList';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#504acc').all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
