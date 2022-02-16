# Using Environment Variables

## Building docker image
```
$ docker build -t mhayk/hello-nodejs:v4 .
$ docker push mhayk/hello-nodejs:v4
```

## Deploying with kubernetes
```
$ kubectl apply -f deployment.yaml
```