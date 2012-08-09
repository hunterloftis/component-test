setup:
	rm -rf node_modules
	npm cache clean
	npm install

test:
	npm install
	scripts/test

test-quick:
	scripts/test

start:
	npm start

open:
	(sleep 2 && open http://localhost:3000) &
	npm start



.PHONY: setup test test-quick start open