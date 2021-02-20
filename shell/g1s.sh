#!/bin/bash
if [ $# -eq 0 ]; then
    if [ ! -d "./.git" ]; then
        echo "This folder seems not to be a repository"
    else
        url=$(cat '.git/config' | grep url)
        url=${url#*url = }
        url=${url/github/github1s}
        url=${url/.git/}
        python -mwebbrowser ${url}
    fi
elif [ $# -eq 2 ]; then
    python -mwebbrowser https://github1s.com/$1/$2
else
    echo "Error! Only one arguments or too many arguments!"
fi