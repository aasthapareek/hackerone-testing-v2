#!/bin/bash
# Sync repos between GitHub orgs

GH_TOKEN="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"

gh api repos/taskflow-inc/api --jq '.default_branch'
