# Full stack app deployment with docker compose

Here is a deployment of a PERN(PostgreSQL,Express,React,Node) app that is a simple markbook. It also has a side server that is not connected to the main app(minimal build golang server).

# Usage

```
 git clone https://github.com/BlazBone/msi2.git
```

```
cd msi2
```

```
docker compose up
```

wait....

![alt text](/images/running.png)
we can see all our containers running

# Frontend

-   http://localhost
-   we can enter the mark in 'vnesi oceno'(must be INT) end subject in 'vnesi predmet'
-   press 'dodaj v predavalnico' to add to the markbook
-   show our markbook with 'prikazi redovalnico'
-   ter prikazemo redovalnico z drugim gumbom
    ![alt text](/images/front.png)

# Backend

-   http://localhost:5000
-   http://localhost:5000/now returns current time
-   http://localhost:5000/dodajOceno is used to add a mark
-   http://localhost:5000/vseOcene is used to get all grades from database
    ![alt text](/images/back.png)

# Golang

-   http://localhost:8081
-   http://localhost:8081/drugo short description (in slovene) about difference of the images
    ![alt text](/images/golang.png)

# Adminer

-   http://localhost:8080
-   username: `myadmin` password: `mypassword` database: `postgresql`
-   we can view our database
    ![alt text](/images/database.png)

## PostgreSQL

-   Uses volumes to keep data safe in case our container brakes and can use data that has already been collected.
