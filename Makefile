.PHONY: out
out:
	yarn && \
	(cd server && node ./server.js) & \
	yarn start & \
	wait

.PHONY: ios
ios:
	yarn
	make pods
	yarn ios

.PHONY: pods
pods:
	(cd ios && pod install)
