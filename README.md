This app should test web application on url: www.merlin.pl

It is maven project with added some dependencies like: selenium or cucumber.

To run tests for particular browser run:
	-mvn test -Dbrowser=firefox
	-mvn test -Dbrowser=chrome

The initial drivers are for linux 64bit.

If u want run app on another OS copy the proper drivers to "/drivers/" directory.

Raport will be generated after running test in "/target/html/index.html" file. You can open it with any browser.
