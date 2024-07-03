# DotNet Proficiency

Demo project using ASP with .NET 8, React (Node 22), and Docker.

## Requirements

- Docker
- Docker Compose
- .NET 8
- Node 20/22

## Development

```sh
docker compose up -d
```

After a short time, the API will be available on http://localhost:5000/ and the frontend will be available on http://localhost:3000/

## TODO

- Isolate deployment stage from build/dev stage in docker-compose.yaml
- Create IaC using Terraform, targeting Azure
- Create pipelines for build, test, release using GitHub Actions (or Azure DevOps Pipelines, TBD)
- Come up with ideas and create issues
