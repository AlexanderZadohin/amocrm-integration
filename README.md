Инструкция по запуску проекта

Клонируй репозиторий

git clone https://github.com/your-username/amocrm-integration.git
cd amocrm-integration

Установи зависимости

npm install

В корне проекта создай файл `.env` (если его ещё нет) и пропиши свои параметры:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=ТвойПарольОтMySQL
DB_NAME=amocrm
AMOCRM_API_URL=https://borda3.amocrm.ru/api/v4
AMOCRM_ACCESS_TOKEN=твой_долгосрочный_токен
AMOCRM_CLIENT_ID=твой_id_интеграции
AMOCRM_CLIENT_SECRET=твой_секретный_ключ

Подними MySQL и создай базу

Убедись, что MySQL сервер запущен.
Создай базу данных (если не создал):

CREATE DATABASE amocrm;

Запусти SQL-скрипты для создания таблиц (если надо):

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) UNIQUE,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE deals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL,
  contact_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE SET NULL
);

Запусти проект

Для разработки:

npm run dev

Для production:

npm run build
npm start

Проверь работу через Postman

Пример запроса на создание контакта:

  * **POST** `http://localhost:3000/api/contacts`
  * Тело:

    ```json
    {
      "name": "Ivan Ivanov",
      "phone": "79991234567",
      "email": "ivan@example.com"
    }
    ```
Пример запроса на создание сделки:

  * **POST** `http://localhost:3000/api/deals`
  * Тело:

    ```json
    {
      "title": "Test Deal",
      "status": "new",
      "contact_id": 1
    }
