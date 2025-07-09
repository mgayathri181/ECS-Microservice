# AWS ECS Fargate Microservices CI/CD Pipeline
This repository contains two Node.js microservices (`user-service` and `product
service`) deployed using AWS ECS Fargate with Blue-Green deployment via 
CodeDeploy. CI/CD is managed using AWS CodePipeline and CodeBuild.
 ## Microservices- `user-service`: Provides user information- `product-service`: Provides product information
 ## Deployment Flow
 1. Code pushed to GitHub triggers CodePipeline
 2. CodeBuild builds Docker images and pushes to ECR
 3. CodeDeploy updates ECS service via Blue-Green deployment
 ## Local Development
 ```bash
 cd user-service
 npm install
 node index.js