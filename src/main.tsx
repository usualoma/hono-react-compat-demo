import { render } from "hono/jsx/dom";
import { SpinnerCircular } from 'spinners-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import * as Popover from "@radix-ui/react-popover";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        Some more info…
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

function App() {
  const notify = () => {
    toast("Wow so easy!");
  };

  return (
    <div>
      <h3>Spinner</h3>
      <SpinnerCircular/>
      <h3>Toast</h3>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <h3>Primitive</h3>
      <PopoverDemo/>
    </div>
  );
}

render(<App />, document.getElementById("app")!);
