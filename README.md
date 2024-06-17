# hey
# hello I am shashi vadna how are you i am find and how is your work
## docker networks
### for connect 2 docker containers 


```
docker network create <network_name>
```

```cmd
docker run  -v mongo_volume:/data/db -p 27017:27017 --name mymongo --network my-network  mongo
```

```
docker network ls
```

```
docker run -p 3000:3000 --name nodefile --network my-network week-15.2.2
```


## vloumms 

### for storeing persist data aka database data


```
docker volume create <volume_name>
```


```
docker volume ls
```

```
docker run  -v mongo_volume:/data/db -p 27017:27017 --name mymongo --network my-network  mongo
```




