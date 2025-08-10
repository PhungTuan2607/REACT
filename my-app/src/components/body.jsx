function Body() {
  const food = ["Hamburger", "fried chick", "chips"];
  return (
    <ul>
      <li>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </li>
    </ul>
  );
}
export default Body;
