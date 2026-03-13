install:
	npm ci

reinstall:
	rm -rf node_modules
	npm ci

dev: reinstall
	npm start

brain-games:
	node bin/brain-games.js