// import App from "src/islands/App.tsx";
// import { createElement } from "https://esm.sh/preact";
// import render from "npm:preact-render-to-string";

// const ssr = render(createElement(App));

export default function ({ url, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Preact coso</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
        </nav>
        <section>
          <h1>{url}</h1>
          {children}
        </section>
      </body>
    </html>
  );
}
