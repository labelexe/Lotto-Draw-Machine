 ![don Pablo](https://donpablonow.github.io/assets/img/signature.png)
 ![PHP](https://www.craiglotter.co.za/wp-content/uploads/2014/08/php-banner-strip.jpg)
 
# Lotto Draw Machine

## Table of Contents

  * [Requirements](#-requirements)
    * [Single Page](#-single-page)
    * [Powerballs](#-powerballs)
    * [Export](#-export)
    * [Play](#-display)
    * [Disc Storage](#-disc-storage)
    * [CSV File](#-csv-file)
    * [OOP](#-oop)
  * [Approach](#-approach)
  * [Framework](#-framework)
  * [Installation](#-installation)
  * [Setup Service](#-setup-service)
  * [Start Service](#-start-service)
  * [Setup Client](#-setup-client)
  * [Start Client](#-start-client)
  * [Contact](#-contact)

# 📢 Requirements

## 📋 Single Page

✅ Create a single page application that is a ‘Lotto Draw machine’.

## 📋 Powerballs

✅ The draw is a lotto with powerballs. 

## 📋 Export

✅ The application should be a single page with the buttons being Play button and an Export All button. Explanation: 
    ✔️  There are up to [40 to 49] number of balls in a main set of balls. 
    ✔️  There are between [5 to 7] number of balls drawn from the main set. 
    ✔️  There are up to [5 to 49] number of balls in a powerball set. 
    ✔️  There are between [0 to 3] number of balls drawn from a powerball set. 

## 📋 Play

✅ When the Play button is pressed the correct number of balls are chosen from the ball set and the powerball set, this combination is displayed, showing the balls and powerball(s) if any. 

## 📋 Disc Storage

✅ The last 10 drawn combinations need also be shown on the screen, along with their draws time. The last 100 winning combinations, and their draw times need to be persisted to disk. 

## 📋 CSV File

⬛ When Export All is pressed then all the previous drawn combinations from the persistence store are presented to the user as a CSV file. 

## 📋 OOP

⬛ The program needs to be designed as one deems appropriate, other than the draw mechanism itself that needs be done in an OOP style with a primary public method named draw() 
Apply to the best of your ability all best practices 

# 📢 Framework
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# 🚧 Setup Service

## Process

  * Install Project Dependencies
  * Generate the Project Key
  * Run the Migrations

Please navigate to `/service/` and run the following commands:

```
composer install
php artisan key:generate
php artisan migrate
```

Setup a MySQL Database for the project for example:

```
CREATE DATABASE ldm_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL on ldm_test.* to ldm_test@127.0.0.1 identified by 'ldm_test';
```

# 🚥 Start the Service:

Please navigate to `/service/` and run the following command:

```
php artisan serve

```

Expected Results:

  * Default Laravel Page: [127.0.0.1:8000](127.0.0.1:8000)
  * 'Unauthorized' message: [127.0.0.1:8000/api/clients](127.0.0.1:8000/api/clients)

Please note that if you are on a virtual machine and NAT, you might need to run the server command instead:

```
`php artisan serve --host 0.0.0.0` .
```

# 🚧 Setup Client

## Process:

  * Open `/client`
  * Install the Dependencies

Please navigate to `/client/` and run the following commands:

```
npm install -g @angular/cli@^6.1
npm install
```

Launch the client via [127.0.0.1:4200](127.0.0.1:4200)

# 🚥 Start Client

Please navigate to `/client/` and run the following command:

```
ng serve --open
```

Please note that if you are on a virtual machine and NAT, you might need to run the server command instead:

`ng serve --open --host 0.0.0.0`

# 📢 Contact

For more information please contact don Pablo: https://donpablonow.github.io/contact