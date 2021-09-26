<center>
  <img src="https://miro.medium.com/max/1400/0*pA3xsXQlkpE4uBC4.jpg" width="300">
</center>

# 第13屆IT賽 Demo

##  Branch : feature/compose
參考: [Day 15](https://ithelp.ithome.com.tw/articles/10262192)
* 執行:
```
# clone下來後在根目錄執行:
docker-compose up -d

# 開啟網頁
http://localhost:8085
```

* 資料庫填入資料
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

