#!/bin/bash

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
BRANCH_REGEX="^(mobile|service|components|shared|config)\/(feature|fix|refactor)\/[a-z0-9]+(?:_[a-z0-9]+)+$"

echo "Validating branch name: $BRANCH_NAME"

if ! echo "$BRANCH_NAME" | grep -Eq "$BRANCH_REGEX"; then
  echo "❌ Invalid branch name!"
  echo "Branch must match pattern:"
  echo "  <domain>/<type>/<feature_name_with_underscore>"
  echo ""
  echo "Allowed domains:"
  echo "  mobile, service, components, shared, config"
  echo ""
  echo "Allowed types:"
  echo "  feature, fix, refactor"
  echo ""
  echo "Examples:"
  echo "  mobile/feature/user_login_flow"
  echo "  service/fix/api_timeout_issue"
  echo ""
  exit 1
fi

echo "✅ Branch name is valid."
exit 0
