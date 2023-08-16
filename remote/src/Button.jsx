import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button className="shared-btn" onClick={() => setState(state + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};
export default Button;
