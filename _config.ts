import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import imagick from "lume/plugins/imagick.ts";
import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(imagick());
site.use(tailwindcss());
site.use(jsx_preact({ extensions: [".jsx"] }));
site.use(postcss());
site.use(mdx());
site.ignore("islands");
site.use(
  esbuild({
    extensions: [".tsx"],
    options: {
      bundle: true,
      format: "esm",
      minify: false,
      keepNames: true,
      platform: "browser",
      target: "esnext",
      treeShaking: true,
    },
  })
);

export default site;
