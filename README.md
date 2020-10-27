 ![don Pablo](https://donpablonow.github.io/assets/img/signature.png)
 ![PHP](https://www.craiglotter.co.za/wp-content/uploads/2014/08/php-banner-strip.jpg)
 
# Lotto Draw Machine

## Table of Contents

  * [Requirements](#📢-requirements)
    * [Single Page](#📋-single-page)
    * [Powerballs](#📋-powerballs)
    * [Export](#📋-export)
    * [Display](#📋-display)
    * [Disc Storage](#📋-disc-storage)
    * [CSV File](#📋-csv-file)
    * [OOP](#📋-oop)
  * [Approach](#📢-approach)
    * [Framework](#📢-setup)
      * [Setup](#📢-client)
  * [Contact](#📢-contact)

# 📢 Requirements

## 📋 Single Page

✅ Create a single page application that is a ‘Lotto draw machine’.

## 📋 Powerballs

✅ The draw is a lotto with powerballs. 

## 📋 Export

✅ The application should be a single page with the buttons being Play button and an Export All button. Explanation: 
    ✔️  There are up to [40 to 49] number of balls in a main set of balls. 
    ✔️  There are between [5 to 7] number of balls drawn from the main set. 
    ✔️  There are up to [5 to 49] number of balls in a powerball set. 
    ✔️  There are between [0 to 3] number of balls drawn from a powerball set. 

## 📋 Display

⬛ When the Play button is pressed the correct number of balls are chosen from the ball set and the powerball set, this combination is displayed, showing the balls and powerball(s) if any. 

## 📋 Disc Storage

⬛ The last 10 drawn combinations need also be shown on the screen, along with their draws time. The last 100 winning combinations, and their draw times need to be persisted to disk. 

## 📋 CSV File

⬛ When Export All is pressed then all the previous drawn combinations from the persistence store are presented to the user as a CSV file. 

## 📋 OOP

⬛ The program needs to be designed as one deems appropriate, other than the draw mechanism itself that needs be done in an OOP style with a primary public method named draw() 
Apply to the best of your ability all best practices 

# 📢 Approach

Project design

# ⚡ Framework

Laravel Lumen 

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## 🚧 Setup

[Client Setup Guide](wiki/Lumen)

# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://poser.pugx.org/laravel/lumen-framework/d/total.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/lumen-framework/v/stable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## Contributing

Thank you for considering contributing to Lumen! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


# Installation

Server Requirements
The Lumen framework has a few system requirements. Of course, all of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use Homestead as your local Lumen development environment.

However, if you are not using Homestead, you will need to make sure your server meets the following requirements:

PHP >= 7.3
OpenSSL PHP Extension
PDO PHP Extension
Mbstring PHP Extension

#Installing Lumen

Lumen utilizes Composer to manage its dependencies. So, before using Lumen, make sure you have Composer installed on your machine.

Install Lumen by issuing the Composer create-project command in your terminal:
```
composer create-project --prefer-dist laravel/lumen blog
```

## Serving Your Application

To serve your project locally, you may use the Laravel Homestead virtual machine, Laravel Valet, or the built-in PHP development server:
```
php -S localhost:8000 -t public
```
## Configuration
All of the configuration options for the Lumen framework are stored in the .env file. Once Lumen is installed, you should also configure your local environment.

## Application Key

The next thing you should do after installing Lumen is set your application key to a random string. Typically, this string should be 32 characters long. The key can be set in the .env environment file. If you have not renamed the .env.example file to .env, you should do that now. If the application key is not set, your user encrypted data will not be secure!


## Compatibility
Since Lumen is a totally separate framework from Laravel, it does not intentionally offer compatibility with any additional Laravel libraries like Cashier, Passport, Scout, etc. If your application requires the functionality provided by these libraries, please use the Laravel framework.


# 📢 Contact

For more information please contact don Pablo: https://donpablonow.github.io/contact

