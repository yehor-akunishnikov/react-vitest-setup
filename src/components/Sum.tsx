import {FC, useState} from 'react';

export const Sum: FC = () => {
  const [counter, setCounter] = useState(0);

  return (<>
    <p data-testid="output">{counter}</p>
    <button data-testid="increment" onClick={() => setCounter(counter + 1)}>Increment</button>
  </>);
};
