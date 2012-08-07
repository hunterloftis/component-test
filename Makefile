start:
	npm start

open:
	(sleep 2 && open http://localhost:3000) &
	npm start

test:
	scripts/test

.PHONY: start open