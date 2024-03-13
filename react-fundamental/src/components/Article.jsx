function Article() {
  const name = "KLaZ";
  const titles = ["tutotrial react", "tutotrial nodejs", "tutotrial nestjs"];
  return (
    <>
      <p>Hello {name}</p>
      <ul>
        {titles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default Article;

