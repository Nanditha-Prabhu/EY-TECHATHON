# <u>Stylify AI Customer Website</u>

---

### Development:

---

##### Using npm:

1. Install Dependenices:

```bash
cd Frontend/
npm i

cd ../Backend/
npm i
```

2. Start Frontend server

```bash
cd Frontend/
npm run dev -- --host
```

3. Start Backend Server

```bash
cd Backend/
npm start
```

<u>NOTE:</u> Make sure you have `.env` file in `Backend/` directory



##### Using Docker:

1. Build docker images:

```bash
docker build -t stylifyc_frontend Frontend/
docker build -t stylifyc_backend Backend/
```

2. Run docker-compose yaml file (To start the container):

```bash
docker-compose -f stylify-customerweb up
```

3. To stop the container:

```bash
docker-compose -f stylify-customerweb down
```
