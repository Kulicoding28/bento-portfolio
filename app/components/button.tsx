const Button = ({
  text,
  color = "#070707",
}: {
  text?: string;
  color?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit"
    >
      <span>{text}</span>
    </div>
  );
};

export default Button;
