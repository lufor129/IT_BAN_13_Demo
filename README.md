<center>
  <img src="https://miro.medium.com/max/1400/0*pA3xsXQlkpE4uBC4.jpg" width="300">
</center>

# 第13屆IT賽 Demo

##  Branch : feature/node
參考: [Day 13](https://ithelp.ithome.com.tw/articles/10262190)、[Day 14](https://ithelp.ithome.com.tw/articles/10262191)
為了方便展示，.env檔有上傳(正常要加在gitignore上避免被看光光IP)

* 執行:
```
# 1. 新增Network
docker network create itban_network

# 2. 資料庫(postgres)
docker run -d --name my_postgres --network itban_network -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v pdata:/var/lib/postgresql/data -p 5432:5432 postgres

# 3. 後端(Express)
cd ./app && docker build -t mynode:latest .
docker run -d -p 4200:3000 --name run_mynode --network itban_network mynode:latest

# 4. 更改你的前端呼叫IP
echo "VUE_APP_Server_URL=http://<IP>:4200/" > ./html/.env.production

# 5. 前端(Vue)
cd ./html && docker build -t myweb:latest .
docker run -d -p 8085:80 --name run_myweb --network itban_network myweb:latest

# 6. 開啟網頁
http://<IP>:8085/
```

* 進入資料庫
```
docker exec -it my_postgres bash
> psql --username=postgres
> CREATE DATABASE db;
> \c db;
> CREATE TABLE COMPANY(
>   NAME TEXT,
>   AGE  INT
> );
>
> INSERT INTO COMPANY (NAME,AGE) VALUES ('TOM',20),('MARY',18);
```