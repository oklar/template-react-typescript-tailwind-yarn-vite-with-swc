import reactLogo from "./assets/react.svg";
import typescriptLogo from "./assets/typescript.svg";
import tailwindLogo from "./assets/tailwind.svg";
import yarnLogo from "./assets/yarn.svg";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-50">
      <div className="flex justify-center items-center h-1/2 flex-col p-2">
        <div>
          <h1 className="text-blue-600">
            Vite (SWC) + TypeScript + React + Tailwind + Yarn
          </h1>
        </div>

        <div className="flex p-2">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="w-8 h-8 p-1" alt="Vite logo" />
          </a>
          <a href="https://www.typescriptlang.org" target="_blank">
            <img
              src={typescriptLogo}
              className="w-8 h-8 p-1"
              alt="TypeScript logo"
            />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="w-8 h-8 p-1" alt="React logo" />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img
              src={tailwindLogo}
              className="w-8 h-8 p-1"
              alt="Tailwind logo"
            />
          </a>
          <a href="https://yarnpkg.com" target="_blank">
            <img src={yarnLogo} className="w-8 h-8 p-1" alt="Yarn logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
