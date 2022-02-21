# Ecommerce_APIs

#run npm install to install dependencies

# To run the project

npm run dev

# User Registration

URL: /api/users/registration

Method: POST

Success Response: Code: 200

                  Content: Inserted successfully
                  
 Error Response: Code: 400
 
                  Content: Email already Exists   
                  
# User Login

URL: /api/users/login

Method: POST

Success Response: Code: 200
                  Content: Logged in successfully and generates a bearer token
                  
Error Response: Code: 400
                  Content: User not found or Password incorrect
                  
# Insert product category

URL: /api/products/add-category

Method: POST

Success Response: Code: 200
                  Content: Inserted successfully
                  
 Error Response: console the error
 
 # Get Category list 
 
URL: /api/products/all-category

Method: GET

Success Response: Code: 200
                  Content: [
                                {
                                    "category_id": 1,
                                    "category_name": "Smartphone"
                                },
                                {
                                    "category_id": 2,
                                    "category_name": "Smartphone"
                                },
                                {
                                    "category_id": 3,
                                    "category_name": "Smartphone"
                                },
                                {
                                    "category_id": 4,
                                    "category_name": "Video Game"
                                }
                            ]
                            
 Error Response: console the error
 
 # Insert product 
 
URL: /api/products/add-product/:id

Method: POST

Params:   required {category_id}

Success Response: Code: 200
                  Content: Inserted successfully
                  
 Error Response: console the error
 
 # Get all products
 
URL: /api/products/all-products

Method: GET

Success Response: Code: 200
                  Content: [
                                {
                                    "name": "Iphone 12",
                                    "Image": "",
                                    "description": "Apple products",
                                    "price": 10000
                                },
                                {
                                    "name": "Gothic ",
                                    "Image": "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
                                    "description": "Video game",
                                    "price": 100
                                }
                            ]
                            
 Error Response: console the error
 
# Create order 

URL: /api/orders/create-order

Method: POST

Success Response: Code: 200
                  Content: Inserted successfully
                  
 Error Response: console the error
 
 # Get order list
 
 URL: /api/orders/all-orders
 
 Method: GET
 
 Success Response: Code: 200
                  Content: [
                                {
                                    "id": 2,
                                    "userId": 1,
                                    "productId": 2,
                                    "createdAt": "2022-02-21T18:48:00.381Z",
                                    "updatedAt": "2022-02-21T18:48:00.381Z"
                                }
                            ]
                            
 Error Response: console the error
                                    
