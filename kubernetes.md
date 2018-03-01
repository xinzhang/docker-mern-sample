### login
gcloud auth activate-service-account --key-file='/var/app/serviceaccoutn-keys.json'

### Start the kuberntes in GCP

gcloud container clusters get-credentials [CLUSTER_NAME]

kubectl run hello-devops --image gcr.io/google-samples/hello-app:1.0 --port 8080 

kubectl expose deployment hello-devops --type "LoadBalancer"

kubectl get service hello-devops

kubectl get pod --selector="run=hello-devops" -o jsonpath='{.items[0].metadata.name}'

kubectl port-forward hello-devops 80:3300

### Clean up
kubectl delete service hello-server
gcloud container clusters delete [CLUSTER_NAME]

kubectl get deployment
kubectl delete deployment <deployment-name>

kubectl delete pod <pod-name>

### Edit yaml file
 "spec": {
        "restartPolicy": "Never",
 }
 

