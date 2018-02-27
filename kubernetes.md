### Start the kuberntes in GCP

gcloud container clusters get-credentials [CLUSTER_NAME]

kubectl run hello-server --image gcr.io/google-samples/hello-app:1.0 --port 8080 

kubectl expose deployment hello-server --type "LoadBalancer"

kubectl get service hello-server

### Clean up
kubectl delete service hello-server

gcloud container clusters delete [CLUSTER_NAME]

### Edit yaml file
 "spec": {
        "restartPolicy": "Never",
 }
 

