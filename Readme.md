# Express App - Components

A simple app with sign-in and dashboard views.

## Concepts

- **Everything is a component** (components live in `lib`)
- **Pyramid testing** (view integrations live in `test`, model and controller tests live in `lib/{component}/test`)
- **Makefile as entry point** (everything starts with `make`)
- **Separate code and config** (`config` is injected into `main()`) ...and other 12-factor guidelines

## Try it

```
$ git clone git://github.com/skookum/component-test.git
$ cd component-test
$ make setup
$ make test
$ make open
```

## Inspired by

- http://tjholowaychuk.com/post/27984551477/components
- http://blog.izs.me/post/27987129912/tj-holowaychuk-components
- http://skookum.com/blog/re-components-in-practice/
