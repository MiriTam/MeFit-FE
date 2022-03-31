# Mefit

Mefit is a web application designed to help users plan and manage their weekly workout goals. Mefit provides
workout programs that target different areas of fitness. Users make goals for themselves to complete a workout
program by a given date. The application then provides them with an overview of the workouts they must complete to 
achieve their goal and their progress towards it. The application recommends suitable workout programs to the user 
based on their fitness level and exercise category restrictions. The purpose of the category restrictions is to
prevent injury by warning users with pre-existing conditions if they attempt to engage in a type of exercise
that may trigger their health difficulties, such as someone who struggles with a knee injury choosing to do a 
heavy leg workout. However, users make the final decision on which workouts to participate in.



The workout programs are produced by contributors and consumed by any user. The contributors create new exercises 
and combine them into workouts, which are then combined into workout programs. While users may participate in the
contributor's workout programs, the contributor is the owner of everything they have contributed and may change or 
remove their contributions as they see fit. All contributed workout programs are available to all users.
Contributors may also use the regular user aspects of the application.



Administrators are the users with the most access privileges. The purpose of the administrator role is to manage
the users of the application. An administrator can alter a user's profile, delete a user, and make another user a 
contributor or administrator. All administrators also have contributor access. However, they can only alter other
users, not the contributions of other contributors.


## Source Code

The code for this project is available on GitHub. The application is divided into a front-end and back-end part.

The front-end code is available at: https://github.com/MiriTam/MeFit-FE.git

The back-end code is available at: https://github.com/Vannmellelon/MeFit-BE.git


## Contributors

This application was developed by Anne Elisabeth Larsen, Jasotharan Cyril, Konstantinos Pascal, Ammar Ahmed, and 
Miriam Tamara Grødeland Aarag.

[@Vannmellelon](https://github.com/Vannmellelon)

[@s325909](https://github.com/s325909)

[@konstpascal](https://github.com/konstapascal)

[@AmmarAhmed007](https://github.com/AmmarAhmed007)

[@MiriTam](https://github.com/MiriTam)

The project was developed with the support of mentor Magnus Jerre.

[@magnusjerre](https://github.com/magnusjerre)


## Technologies

MeFit was developed with a separate front and back-end that communicate through an API. The front-end is a
React application and the back-end is based on dotnet. Authentication and authorization are handled using the 
third-party technology Auth0. The React application is hosted in production on Heroku, while the dotnet 
application is containerized using Docker and hosted on Microsoft Azure. The database is SQL and is also hosted
on Microsoft Azure.


## View in Production

MeFit is available in a production environment. 

The front-end part of the application is running on: https://mefit-fe.herokuapp.com/

View the documentation for the API on: https://mefit22api.azurewebsites.net/api/


## Install and Run in Development

### Front-end

- Install the necessary dependencies by running 'npm install'.
- Run the application by running 'npm start'.
- Unless otherwise configured, the application will be running on localhost://3000.


### Back-end

- Run the application by running 'dotnet run'.
- Unless otherwise configured, the application will be running on localhost://5000.


## License

MIT © 2022 Miriam Tamara Grødeland Aarag, Anne Elisabeth Larsen, Konstantinos Pascal, Ammar Ahmed, Jasotharan Cyril
