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
 

#running in pipeline
    - gcloud auth activate-service-account --key-file='da4ef993105c.json'
    
    - gcloud container clusters get-credentials stan-kube --zone australia-southeast1-a --project test-triplem-baas
    
    # - kubectl create secret docker-registry registry.gitlab.com --docker-server=https://registry.gitlab.com/v1/ --docker-username="$CI_REGISTRY_USER" --docker-password="$CI_REGISTRY_PASSWORD" --docker-email=xin.zhang@sca.com.au
    
    - kubectl create -f devopsnetcoreapp-pod.yml
    
    - kubectl get pod devopsnetcoreapp
    
    #- kubectl run devopsnetcoreapp --image registry.gitlab.com/sca-developers/devopsnetcoreapp --port 5005
    
    #- kubectl expose deployment devopsnetcoreapp --type "LoadBalancer"
    
