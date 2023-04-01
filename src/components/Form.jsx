import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {};
  return (
    <section className='container'>
      <form onSubmit={handleSubmit} className='color-form'>
        <h4>color generator</h4>

        <input
          type='text'
          name='color'
          id='color'
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
