# Сервис интранет

#### Команда для запуска тестов
npm test

### Команда для подтягивания переменного окружения
npm run env

### Команда для сборки и запуска проекта в ходе разработки
npm run dev

### Deploy приложения
Приложение деплоится автоматически при merge в ветку master.

### Deploy приложения (вручную)
1. Установка [heroku](https://toolbelt.heroku.com)
2. Авторизация `heroku login`
3. `heroku git:remote -a yahackteam2`
4. `npm run deploy:dynamic`
5. Перейти по [ссылке](http://yahackteam2.herokuapp.com)
