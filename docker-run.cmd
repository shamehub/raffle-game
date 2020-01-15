docker rmi  registry.jiusuirenyuan.com:5000/game:30000
SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=amd64
go build -o main

docker build -t  registry.jiusuirenyuan.com:5000/game:30000 .
docker push  registry.jiusuirenyuan.com:5000/game:30000
