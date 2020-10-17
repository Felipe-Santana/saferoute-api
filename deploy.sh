#!/bin/bash

EB_APP="saferoute-api-v2"
PRODUCTION_BRANCH="master"

NODE_ENV=""
if [[$TRAVIS_BRANCH == $PRODUCTION_BRANCH]]; then
  NODE_ENV="production"
else
  echo "Not deploying"
  exit
fi

EB_ENV="$EB_APP-$NODE_ENV"
echo "Deploying to $EB_ENV"

pip install --user --upgrade awsebcli

mkdir -p ~/.aws
echo "[profile eb-cli]" > ~/.aws/config
echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/config
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/config
eb status

eb deploy $EB_ENV -v
rm ~/.aws/config