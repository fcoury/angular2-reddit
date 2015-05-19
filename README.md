# Getting started

This is not working with WebPack yet. We are using Typescript's compiler `--watch`
clause to get TypeScript compiled.

To install dependencies and start compiling:

```
npm install
tsc --watch
```

Then run a local filesystem HTTP server:

```
node_modules/http-server/bin/http-server
```

And visit [http://localhost:8080](http://localhost:8080)
