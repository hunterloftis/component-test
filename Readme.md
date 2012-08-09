# Express App - Components

A simple app with sign-in and dashboard views.

## Concepts

- **Everything is a component** (components live in [lib](component-test/tree/master/lib))
- **Pyramid testing** (view integrations live in [test](component-test/tree/master/test), model and controller tests live in [lib/{component}/test]([make](component-test/tree/master/lib/users/test))
- **[Makefile](component-test/tree/master/Makefile) as entry point** (everything starts with `make`)
- **Separate code and config** (`config` [is injected](component-test/tree/master/app.js) into `main()`) ...and other 12-factor guidelines

## Try it

```
$ git clone git://github.com/Skookum/component-test.git
$ cd component-test
$ make setup
$ make test
$ make open
```

## Inspired by

- http://tjholowaychuk.com/post/27984551477/components
- http://blog.izs.me/post/27987129912/tj-holowaychuk-components
- http://skookum.com/blog/re-components-in-practice/
