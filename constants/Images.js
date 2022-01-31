const importAll = (require) => require.keys().map(require);

export const images = importAll(
  require.context('../Images', false, /\.(png|jpe?g|svg)$/)
);
