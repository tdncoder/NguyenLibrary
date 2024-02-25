<h1>Nguyên Library Website</h1>

This is my personal project to learn how to use stripe payment in Spring boot and learn some basic knowledge about React and TypeScript.

<h1>Technology in this project</h1>

<h3>Languages used in this project</h3>

- Java.
- HTML/CSS.
- TypeScript.

<h3>Framework</h3>

- SpringBoot.
- Bootstrap 5.
<h3>Library</h3>

- ReactJS
<h3>Databases</h3>

* MySQL.
<h3>Usage environment</h3>

* Java 17.
* MySQL version 8.0.33.
* SpringBoot version 2.7.18
* npm version 8.15
* node version 16.17.0
* tsc version 4.7.4
* React version 18.2.0

<h1>Reason to create this Website</h1>

Due to the situation at the university, many students come to the library to study, to borrow books... Because the number of students is very large and they have to wait in line for a long time to be able to borrow or return books to the library. So this is the reason why this website will help many people.

<h1>Content</h1>

This website consists of 2 parts: Admin, Client.
- Admin: manages book information, manages quantity of book, create a book, deleted a book...
- Client: They can see content about a book. They can checkout the book and pay fees if the due is over and more.

<h1>Describe my work in the project</h1>

- Build a list book page.
- Built a book details page, displaying book information for users.
- Build a book payment page using a 3rd party (Stripe) for users to make payments.
- Build a history book page to make user easily controlling their due.
<h1>Result</h1>

After finished this project, I have learned basic React, TypeScript, use 3rd party to make payments, how to apply React, TypeScript to the SpringBoot project.

<h1>How to run the website</h1>
<h3 class='heading'>Before run Front-End</h3>
Make sure at VS Code in react-library you have install these at terminal:
<h4>Front-end install router</h4>

* npm install react-router-dom@5

<h4>Front-end install okta (3rd-party security)</h4>

- npm install @okta/okta-signin-widget@6.3.3
- npm install @okta/okta-react@6.4.3


<h4>Front-end intall stripe react</h4>

- npm install stripe@9.14.0
- npm install @stripe/react-stripe-js@1.9.0
- npm install @stripe/stripe-js@1.32.0

<h3>After Install</h3>

- We run BackEnd first.
- This project is run in local so you can change another port to run it if you got the error from port.
- After run Back-end code we will run Front-end Code. Please run it with VS Code to make the code run smoothy.
- At terminal VS Code make sure your directory line like this: C:\...\...\...\...\...\Frontend\react-library> at this line please make sure you have install at <b>Before run Front-End</b>
- Then at terminal type: npm start to run my Website.
- http://localhost:3000 (This is the Client Homepage).
- http://localhost:3000/admin (This is the Admin page).
- User Account: username: testuser@email.com, password: test123.
- Admin Account: username: adminuser@email.com, password: admin123.


<h1>Solve some problems about run the website</h1>
<h3>Install Tool</h3>
It is <b>highly recommended</b> that you use the versions listed above to make sure you do not encounter any issues with the course. If you choose to use other versions then the code may not work as expected.
## Install Visual Studio Code
Visual Studio Code is a general purpose IDE that support many programming languages. Visual Studio Code has built-in support for TypeScript.

1. In a web browser, visit https://code.visualstudio.com/
2. Follow the link to download Visual Studio Code for MS Windows

3. Run the Installer

4. Follow the steps in the Installer

## Install Intellij
You can install comunity version 2023.2 or Ultimate with the same version to run the BackEnd Code.


## Install Node
Node is the the runtime environment for executing JavaScript code from the command-line. By using Node, you can create any type of application using JavaScript including server-side / backend applications.

In this course, we'll use Node to run applications that we develop using TypeScript and React.

> Note: This course has been tested with Node 16.17.0. We will install this version.

1. In your web browser, visit https://nodejs.org/download/release/v16.17.0/

2. Select the **Windows Installer (.msi)** for your system (32-bit or 64-bit)

3. Run the Installer

4. Follow the steps in the Installer

5. Open a **Command Prompt** window to verify the node installation

6. In the **Command Prompt** window, type the following command: 

    ```bash
    node --version
    ```

   If the installation is successful, you will see the version number

   > Note: The Node installation also includes npm (Node Package Manager).

3. Verify npm is installed

    ```bash
    npm --version
    ```

   If the installation is successful, you will see the version number. 

   > Note: node will have a different number than npm. This is similar to a different Java JDK version number compared to Maven version number.
   >
   > In this example, node is similar to the Java JDK.  And npm is similar to Maven.

## Install tsc
tsc is the TypeScript compiler. We use tsc to compile TypeScript code into JavaScript code. We can install the TypeScript compile using the Node Package Manager (npm)

> Note: This course has been tested with TypeScript 4.7. We will install this version.

1. In your **Command Prompt** window, enter the following command

    ```
    npm install --location=global typescript@4.7.4
    ```

   The "--location=global" installs this as a global package. The TypeScript compiler will be available to all directories for this user.

2. You can verify the installation

    ```bash
    tsc --version
    ```

   If the installation is successful, you will see the version number.

That's it! You have successfully installed the development tools: Visual Studio Code, node, npm and tsc.

## Troubleshooting

### Permissions Issue with tsc

1. If you get the following error when executing tsc command using PowerShell:

    ```bash
    tsc : File C:\Users\johndoe\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

    At line:1 char:1
    + tsc sample-datatypes.ts
    + ~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess
    ```

2. You can resolve this issue with the following steps:

    1. Run Visual Studio Code as **Administrator**

    2. In the Terminal Window of Visual Studio Code, run `Set-ExecutionPolicy RemoteSigned` on PowerShell.

    *This troubleshooting tip was contributed by **Fabio Gomes Sakiyama**. Thanks Fabio!!*

### Typescript: 'tsc' is not recognized as an internal or external command

1. If you get the following error when executing tsc command:

    ```bash
    Typescript: 'tsc' is not recognized as an internal or external command
    ```

2. You can resolve this issue with the following:

    1. Add the npm installation folder to your "user variables" AND "environment variables"

  
