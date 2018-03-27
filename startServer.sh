git pull origin master
apidoc -i routes/ -o apidoc/
npm install

node server.js