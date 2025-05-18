// src/components/ui/card.jsx
export const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-2xl shadow-md p-4" {...props}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-2">{children}</div>
);
