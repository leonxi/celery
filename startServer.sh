git pull origin master
chmod 777 startServer.sh
apidoc -i routes/ -o apidoc/
npm install

node server.js