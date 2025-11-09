import React, { useState } from "react";
import { Button } from "./ui/button";

interface CounterProps extends React.ComponentProps<typeof Button> {}
export const Counter: React.FC<CounterProps> = (props) => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)} {...props}>
      {count}
    </Button>
  );
};
