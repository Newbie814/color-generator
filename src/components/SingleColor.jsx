const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  return (
    <article
      className={index > 7 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
