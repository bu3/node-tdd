#!/usr/bin/env bash

echo ""
echo "!==== Running UI Tests ====!"
echo ""

echo "!--- Starting app server"
PORT=3001 npm start &
NPM_PID=$!

echo "!--- Starting phantomjs"
./node_modules/.bin/phantomjs --webdriver=4444 --webdriver-loglevel=DEBUG &
PHANTOM_PID=$!

echo "!--- Sleeping for a bit, sssshhhhh"
sleep 2

./node_modules/.bin/codeceptjs run --steps
SUCCESS=$?

echo "!--- Sleeping for a bit"
sleep 2

echo "!--- Killing app server"
pkill -P $NPM_PID

echo "!--- Killing phantomjs"
pkill -P $PHANTOM_PID

exit $SUCCESS