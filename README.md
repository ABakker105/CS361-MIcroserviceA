# CS361---Microservice-A
## Workout Recommendation System Based on User’s Exercise Preferences
### A. How to REQUEST data from Microservice A:
Applications must send HTTP requests to the endpoint /preferences in Microservice A. Microservice A listens for requests on port 3001. The screenshot below shows an example request from a user that is sending their workout preferences in the test file to Microservice A. 

![image](https://github.com/user-attachments/assets/599a991b-8c5c-40e9-ae19-a21e0ceab6d4)

### B. How to RECEIVE data from Microservice A:

When the user sends their workout preferences to Microservice A, if there is an exercise that matches their preferences, then response.data will contain the recommended exercises based on their preferences. However, if this is not the case, the .catch block will receive an error. 

![image](https://github.com/user-attachments/assets/5ef9b043-5f6e-433e-9897-816e76095a53)

### C. UML Sequence Diagram:

![image](https://github.com/user-attachments/assets/0925256d-665f-42ea-8ec0-124b95379105)
