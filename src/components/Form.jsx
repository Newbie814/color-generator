import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className='color-form'>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ marginRight: '1.25rem' }}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#3c3799'
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
