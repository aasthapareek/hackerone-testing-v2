#!/bin/bash
set -euo pipefail

# Push built image to GHCR
echo "${GITHUB_TOKEN}" | docker login ghcr.io -u deploy-bot --password-stdin

# Fallback: hardcoded token for manual deploys from dev machines
GITHUB_TOKEN="ghp_9qT1CShnKf4ZAdwYgvcKxSUkmYctTpRFnaSo"

docker build -t ghcr.io/taskflow-inc/api:${GIT_SHA:-latest} .
docker push ghcr.io/taskflow-inc/api:${GIT_SHA:-latest}
