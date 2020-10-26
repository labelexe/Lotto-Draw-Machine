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
    * [Setup](#📢-setup)
      * [Client](#📢-client)
      * [Api](#📢-api)
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

# ⚡ Setup

Using a Laravel Lumen Front End, with a Symfony Rest API backend  and JSON Web Token for Security.

Laravel Lumen - the Front End Client.

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

Symfony2 - the Backend Rest Api

Symfony is a PHP framework for web and console applications and a set of reusable PHP components. Symfony is used by thousands of web applications (including BlaBlaCar.com and Spotify.com) and most of the popular PHP projects (including Drupal and Magento).

Json Web Token - for Security

Why?
JSON Web Tokens (JWTs) make it easy to send read-only signed "claims" between services (both internal and external to your app/site). Claims are any bits of data that you want someone else to be able to read and/or verify but not alter.

Note: If that sounds buzz-wordy, don't worry, it will all become clear in the next 5 mins of reading!

What?
"JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS). ~ IETF

In English
To identify/authenticate people in your (web/mobile) app, put a standards-based token in the header or url of the page (or API endpoint) which proves the user has logged in and is allowed to access the desired content.

example: https://www.yoursite.com/private-content/?token=eyJ0eXAiOiJKV1Qi.eyJrZXkiOi.eUiabuiKv

## 🚧 Client

[Client Setup Guide](docs/client.md)

## 🚧 Api

[API Setup Guide](docs/api.md)

# 📢 Contact

For more information please contact don Pablo: https://donpablonow.github.io/contact
