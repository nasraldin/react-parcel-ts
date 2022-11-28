import { Parcel } from "@parcel/core";

let bundler = new Parcel({
  entries: 'src/index.tsx',
  mode: "development",
  env: {
    NODE_ENV: "test",
  },
  additionalReporters: [
    {
      packageName: "@parcel/reporter-cli",
      resolveFrom: fileURLToPath(import.meta.url),
    },
  ],
});

let subscription = await bundler.watch((err, event) => {
  if (err) {
    // fatal error
    throw err;
  }

  if (event.type === "buildSuccess") {
    let bundles = event.bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`);
  } else if (event.type === "buildFailure") {
    console.log(event.diagnostics);
  }
});

// some time later...
await subscription.unsubscribe();
