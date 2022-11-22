.PHONY: out
out:
	yarn && \
	(cd server && node ./server.js) & \
	yarn start & \
	wait
