#!/bin/bash

# Go to project folder
cd /home/akshitpareek/dummy-backend || exit

# Pull latest code from GitHub
git reset --hard
git pull origin main

# Install any new dependencies
npm install

# Restart the app using PM2
pm2 restart backend-app

echo "Deployment complete at $(date)"
