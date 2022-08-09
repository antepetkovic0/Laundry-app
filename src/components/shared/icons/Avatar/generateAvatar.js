export const generateAvatar = (
  text,
  foregroundColor = "#fff",
  backgroundColor = "#3861fb"
) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 250;
  canvas.height = 250;

  // draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw text
  context.font = "bold 10em system-ui";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
};
