# iiot-eg-case
Practical application of the example case documented in Thesis titled "Comparing IT Architectures for IoT implementations in Manufacturing" by Chai Wadhai

This project is a simulation of a production shopfloor. There are three sensors in the shopfloor: light-sensor-1,2,3 and a shop floor server: server.js. The sensors generate data 
which is sent to test mqtt broker provided by mosquitto. The shopfloor collects and uploads data to the cloud.

Requirements- 
1. Node >= 12.16.2
2. MongoDB atlas cluster

Tip- use a multi tab CLI Terminal like  [Hyper](https://hyper.is) as we will require many terminal instances.

Instructions to set up the system-
1. Clone the project folder on your pc using\
      git clone https://github.com/uwechai/iiot-eg-case.git
      
2. Run\
    npm install\
   in the project folder\
   
3. Navigate to the folder "counter-app-frontend" and run\
    npm install
    
4. Make sure the dependencies installed correctly.

5. Edit the counter app.js and server.js and insert the connection credentials to your mongoDB cluster

6. Start the counter app's backend in a terminal using\
    cd ..../iiot-eg-case\
    node counter-app.js
    
7. Navigate to "counter-app-frontend" in another terminal.Start the counter app's frontend \
    cd ..../counter-app-frontend\
    npm start \
    Your app should be running on localhost:3000
    
5. Start the shop floor server in a new terminal\
    node server.js
    
6. To turn the sensors on run\
    node light-sensor-x   ...(x is sensor number 1,2 or 3)\
    each in 3 separate terminals.

Once the setup is completed, the sensors will produced data every 10 seconds which will finally be displayed in the Web application at port 3000. The application refreshes the data from the database at every 10 seconds.

 

