#!/bin/bash

echo "Stopping old containers..."
docker-compose down

#echo "Building new images..."
#docker-compose build

#echo "Pulling latest image..."
#docker pull beatrice913/prescripto:latest

echo "Starting containers..."
docker-compose up -d

echo "Deployment 
#!/bin/bash
 
echo "Deploying to Kubernetes..."
 
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
 
echo "Checking deployment..."
 
kubectl rollout status deployment/hospital-backend
