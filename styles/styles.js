const styles = `@font-face {
  font-family: StarWars;
  src: url(special_font.woff)
}

body {
  background-color: black;
  color: yellow;
  background-image: url(1.jpg);
}

#title {
  font-size: 60px;
  font-family: StarWars;
  grid-column-start: 1;
}

form {
  text-align: center;
}

label {
  font-family: StarWars;
  font-size: 20px;
}

input[type='text'] {
  display: block;
  margin: 50px auto;
  height: 50px;
  width: 400px;
  font-size: 35px;
  font-family: StarWars;
}

input[type='submit'] {
  background-color: black;
  border: 1px solid yellow;
  padding: 10px;
  border-radius: 5px;
  color: yellow;
  font-size: 20px;
  font-family: StarWars;
  cursor: pointer;
}

ul {
  padding: 100px;
  list-style: none;
  text-align: center;
  font-family: StarWars;
}

li {
  font-size: 44px;
  padding: 40px;
  border-bottom: 1px solid yellow;
}`

export default styles;
