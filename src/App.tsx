import "./App.css";

import { ControlViewModel } from "./core";

import { Control } from "./components/control";

const App = () => {
  const controlViewModel1 = new ControlViewModel(
    [],
    [
      {
        title: "clear",
        callback: () => {
          controlViewModel1.setValue("");
        },
      },
      {
        title: "set Hello world!",
        callback: () => {
          controlViewModel1.setValue("Hello world!");
        },
      },
    ]
  );

  const controlViewModel2 = new ControlViewModel(
    [
      {
        title: "check text",
        callback: () => {
          if (controlViewModel2.value.length) {
            const numberValue = Number(controlViewModel2.value);
            if (!isNaN(numberValue)) {
              alert(numberValue);
            }
          }
        },
      },
    ],
    [
      {
        title: "show text",
        callback: () => {
          alert(controlViewModel2.value);
        },
      },
    ]
  );

  return (
    <div className="bg-sky-300 min-h-screen">
      <div className="max-w-screen-2xl mx-auto my-0 p-5 flex flex-col gap-y-10">
        <Control viewModel={controlViewModel1} />
        <Control viewModel={controlViewModel2} />
      </div>
    </div>
  );
};

export default App;
