import App from "src/islands/App.tsx";
import { hydrate, h } from "https://esm.sh/preact";
//@ts-ignore: Entry point
hydrate(<App />, document.getElementById("app"));
