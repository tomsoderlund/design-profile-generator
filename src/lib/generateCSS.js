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
  font-weight: ${profile.headlineWeight};
  ${profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
}`.replace(/\n {2}\n/g, '\n').replace(/\n {2}\n/g, '\n')
}
