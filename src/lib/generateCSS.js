export default (profile, rootClass = '.body') => {
  return `${rootClass} {
  background-color: ${profile.backgroundColor};
  color: ${profile.textColor};
  font-family: '${profile.textFont}', sans-serif;
  font-size: ${profile.textSize};
  font-weight: ${profile.textWeight};
}

h1, h2, h3 {
  line-height: 1.1em;
  ${profile.headlineColor ? `color: ${profile.headlineColor};` : ''}
  ${profile.headlineFont ? `font-family: '${profile.headlineFont}', sans-serif;` : ''}
  ${profile.headlineWeight ? `font-weight: ${profile.headlineWeight};` : ''}
  ${profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
}

nav {
  background-color: ${profile.headerColor || profile.textColor};
  color: ${profile.backgroundColor};
  ${profile.headlineFont ? `font-family: '${profile.headlineFont}', sans-serif;` : ''}
  ${profile.headlineWeight ? `font-weight: ${profile.headlineWeight};` : ''}
  ${profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
  padding: 0.8em;
  text-align: center;
}

main {
  padding: 1em;
}

a {
  color: ${profile.actionColor};
}

/* #NiceAndSimple: Button - http://codepen.io/tomsoderlund/pen/qqyzqp */
button {
  background-color: ${profile.headerColor || profile.textColor};
  color: ${profile.backgroundColor};
  position: relative;
  border-radius: 0.2em;
  border: none;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  font-family: inherit;
  font-size: inherit;
  line-height: normal;
  ${profile.headlineFont ? `font-family: '${profile.headlineFont}', sans-serif;` : ''}
  ${profile.headlineWeight ? `font-weight: ${profile.headlineWeight};` : ''}
  ${profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
  text-align: center;
  outline: none;
  padding: 0.6em;
  margin-right: 0.6em;
  transition: all 0.1s;
}
button:focus:not(:disabled) {
  opacity: 0.8;
}
button:hover:not(:disabled) {
  opacity: 0.8;
  top: -0.1em;
}
button:hover:active {
  top: 0.1em;
  transition: all 0.05s;
}
button:disabled {
  cursor: initial;
  background-color: silver;
}

button.primary {
  background-color: ${profile.actionColor};
}

/* #NiceAndSimple: Input and Dropdown Menu - http://codepen.io/tomsoderlund/pen/GNBbWz */
input,
textarea,
select {
  background-color: white;
  color: inherit;
  outline: none;
  resize: none;
  box-sizing: border-box;
  border-radius: 0.2em;
  border: 1px solid lightgray;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0.6em;
  margin-right: 0.6em;
}
input::placeholder,
textarea::placeholder {
  color: lightgray;
}
input:hover:not(:disabled):not(:focus),
.input-like:hover:not(:disabled):not(:focus),
textarea:hover:not(:disabled):not(:focus),
select:hover:not(:disabled):not(:focus) {
  border-color: silver;
}
input:focus,
.input-like:focus,
textarea:focus,
select:focus {
  border-color: darkgray;
}
input:read-only,
textarea:read-only {
  color: darkgray;
}
input:disabled,
.input-like:disabled,
textarea:disabled,
select:disabled {
  background-color: whitesmoke;
}
`.replace(/\n {2}\n/g, '\n').replace(/\n {2}\n/g, '\n')
}
