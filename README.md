# SpringBoot-Angular-Task

## build angular app
```javascript
npm run build
```
1. build angular app
2. start spring-boot-app
3. open http://localhost:8080

## angular app development
http://localhost:4200
```javascript
ng serve
```

## proxy config
```json
{
  "/api/*": {
    "target": "http://localhost:8080/",
    "secure": false
  }
}
```
1. Open package.json
2. Find start script
3. Change to below code
```javascript
ng serve --proxy-config proxy-config.json
```
4. Create postbuild and predeploy script in package.json