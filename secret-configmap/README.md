# Using Environment Variables

## Building docker image
```
$ docker build -t mhayk/hello-nodejs:v5.1 .
$ docker push mhayk/hello-nodejs:v5.1
```

## Deploying with kubernetes
```
$ kubectl apply -f configmap-family.yaml
$ kubectl apply -f deployment.yaml
$ kubectl exec -it nodeserver-6c9999fd7f-7p8t9  -- /bin/sh
$ kubectl port-forward svc/nodeserver 9000:80 &
$ curl http://localhost:9000/configmap
```