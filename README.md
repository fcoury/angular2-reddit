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
python -m SimpleHTTPServer 8000
```

And visit [http://localhost:8000](http://localhost:8000)
