 ![don Pablo](https://donpablonow.github.io/assets/img/signature.png)
 ![PHP](https://www.craiglotter.co.za/wp-content/uploads/2014/08/php-banner-strip.jpg)
 
# Lotto Draw Machine

## Table of Contents

  * [Requirements](#requirements)
    * [Single Page](#-single-page)
    * [Powerballs](#-powerballs)
    * [Export](#-export)
    * [Play](#-display)
    * [Disc Storage](#-disc-storage)
    * [CSV File](#-csv-file)
    * [OOP](#-oop)
  * [Rest API (PHP)](#setup-service)
  * [Web Client (ng)](#setup-client)
  * [Authentication (OKTA)](#authentication)
  * [API Documentation (Swagger)](#api-documentation)
  * [Event Tracking (BugSnag)](#bugsnag)
  * [Contact](#contact)

# Requirements

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

  ✅ When the Play button is pressed.
  
      ✔️  The correct number of balls are chosen from the ball set
      ✔️  The powerball set, this combination is displayed
      ✔️  Showing the balls and powerball(s) if any. 

  ## 📋 Disc Storage

  ✅ The last 10 drawn combinations need also be shown on the screen

      ✔️  along with their draws time
      ✔️  The last 100 winning combinations
      ✔️  and their draw times need to be persisted to disk. 

  ## 📋 CSV File

  ✅ When Export All is pressed then 
  
      ✔️  All the previous drawn combinations from the persistence store
      ✔️  presented to the user as a CSV file. 

  ## 📋 OOP

  ✅ The program needs to be designed as one deems appropriate.

      ✔️  Other than the draw mechanism itself that needs be done in an OOP style
      ✔️  with a primary public method named draw() 
      ✔️  Apply to the best of your ability all best practices 

# Framework

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects

# Setup Service

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

# Start the Service:

  Please navigate to `/service/` and run the following command:

  ```
  php artisan serve

  ```

  Expected Results:

    * Default Laravel Page: [127.0.0.1:8000](127.0.0.1:8000)
    * 'Unauthorized' message: [127.0.0.1:8000/api/bets](127.0.0.1:8000/api/bets)

  Please note that if you are on a virtual machine and NAT, you might need to run the server command instead:

  ```
  `php artisan serve --host 0.0.0.0` .
  ```

# Setup Bet

  ## Process:

    * Open `/client`
    * Install the Dependencies

  Please navigate to `/client/` and run the following commands:

  ```
  npm install -g @angular/cli@^6.1
  npm install
  ```

  Launch the client via [127.0.0.1:4200](127.0.0.1:4200)

# Angular Client App

  Please navigate to `/client/` and run the following command:

  ```
  ng serve --open
  ```

  Please note that if you are on a virtual machine and NAT, you might need to run the server command instead:

  `ng serve --open --host 0.0.0.0`

# Authentication

  Authentication Powered by Okta, please register via the App if you do not already have an Okta account.

  For more information please visit the [Okta Website](https://www.okta.com/) for more information.

  My CDN [OBEYi](https://auth.obeyi.com/) is the Security Provider, the CDN and TSL Certificates are Powered by CloudFlare.

  For more information please visit the [CloudFlare Website](https://www.cloudflare.com/) for more information.

# API Documentation

The Lotto Draw Machine App has been developed by don Pablo.

Postman: https://documenter.getpostman.com/view/9014424/TVYJ6xFJ

Swagger: https://app.swaggerhub.com/apis-docs/donPabloNow/LottoDrawMachine/1.0.0


# BugSnag

  Automated error monitoring, reporting, alerting, and diagnostic capture for mobile, web, and backend apps.

  ##Balance agility with stability

  Bugsnag monitors application stability so you can make data-driven decisions on whether you should be building new features, or fixing bugs.
  ‍
  We are a full stack stability monitoring solution with best-in-class functionality for mobile applications.

  For more information please visit the [BugSnag Website](https://www.bugsnag.com/)

# Contact

  For more information please contact don Pablo: [https://donpablonow.github.io/contact](https://donpablonow.github.io/)