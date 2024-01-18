export function formatPropertyName(string) {
  const words = string.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const formattedString = formattedWords.join(' ');

  return formattedString;
}
