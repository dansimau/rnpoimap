# rnpoimap

Welcome to this simple React Native app.

This app has a map for displaying points of interest.

## Getting started

To build iOS, run:

```
make ios
```

To start the app, run:

```
make
```

## JSON API

When the app is running there will be a HTTP server listening at:

    http://127.0.0.1:8080

This server hosts a JSON API with points of interest. To query for points of
interest, do a GET request to:

    http://127.0.0.1:8080?lat={latitude}&lng={longitude}

Replace `latitude` and `longitude` with the area you want to query.
