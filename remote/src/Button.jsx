import "./Button.css";
import useCount from "./store";

export const Button = () => {
  const [state, setState] = useCount(0);
  return (
    <div>
      <button className="shared-btn" onClick={() => setState(state + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};
export default Button;
