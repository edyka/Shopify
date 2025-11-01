#!/bin/bash
echo "Installing Shopify CLI..."

# Check if Homebrew is installed (macOS)
if command -v brew &> /dev/null; then
    echo "Installing via Homebrew..."
    brew tap shopify/shopify
    brew install shopify-cli
else
    echo "Please install Homebrew first: https://brew.sh/"
    echo "Or install Shopify CLI via Ruby: gem install shopify-cli"
fi

echo "Installation complete! Run 'shopify theme dev' to start development server"
