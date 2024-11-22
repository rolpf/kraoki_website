const Button = ({ title, href, target }) => {
  return (
    <a className="lt-button" href={href} target={target}>
      {title}
    </a>
  );
};

export default Button;
