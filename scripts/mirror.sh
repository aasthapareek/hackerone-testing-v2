#!/bin/bash
# Mirror to internal GitLab

GITLAB_TOKEN="glpat-ye7mkt3jC0jsxERRJr2R"

git push --mirror https://deploy:${GITLAB_TOKEN}@gitlab.internal.corp/taskflow/api.git
