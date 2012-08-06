start:
	npm start

open:
	(sleep 2 && open http://localhost:3000) &
	npm start

.PHONY: start open