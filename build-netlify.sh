#!/bin/bash

# Build script for Netlify deployment
echo "Building project for Netlify..."

# Build the client (React app)
echo "Building React frontend..."
cd client && npm run build

echo "Build completed! Ready for Netlify deployment."