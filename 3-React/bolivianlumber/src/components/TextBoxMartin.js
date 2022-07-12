const TextBoxMartin = (title, content) => {
  return (
      <div className="text-box">
          <h3 className="text-title">{title}</h3>
          <p>{content}
          </p>
      </div>
  );
}

export default TextBoxMartin;