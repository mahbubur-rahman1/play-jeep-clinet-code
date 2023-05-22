import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div> */}

            <div className='grid grid-cols-2 gap-2 gap-3 shadow-xl'>
                <div className='card shadow-xl mb-2'>
                    <h1 className='text-2xl font-semibold text-orange-600'>Quaction: What is an access token and refresh token? How do they work and where should we store them on the client-side? </h1>
                    <h3 className='text-green-600 font-bold'>Answer: </h3>
                    <p> <span className='text-orange-400 font-semibold'> Access Token: </span>
                        An access token is a credential that is issued to a client after a successful authentication process. It contains information about the client's identity and permissions. The access token is typically short-lived and has an expiration time associated with it. It is used by the client to access protected resources by including it in the authorization header of API requests. The server validates the access token to ensure that the client has the necessary permissions to perform the requested action. <br />

                        <span className='text-orange-400 font-semibold'> Refresh Token: </span>
                        A refresh token is a long-lived credential that is also issued to the client during the authentication process. Unlike the access token, the refresh token is not sent with every API request. Instead, it is used to obtain a new access token when the current one expires. When the access token expires, the client sends the refresh token to a token endpoint on the server. If the refresh token is valid, the server generates a new access token and returns it to the client. This process allows the client to maintain access to protected resources without requiring the user to reauthenticate.</p>
                </div>
                <div className='card shadow-xl mb-2'>
                    <h1 className='text-2xl font-semibold text-orange-600'>Quaction: Compare SQL and NoSQL databases? </h1>
                    <h3 className='text-green-600 font-bold'>Answer: </h3>
                    <p > <span className='text-orange-400 font-semibold'> SQL:  </span>SQL databases follow a relational data model where data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys. <br />
                        <span className='text-orange-400 font-semibold'>  NoSQL: </span> NoSQL databases support various data models such as key-value pairs, documents, wide-column, or graph-based structures. They provide more flexibility in data representation, allowing for dynamic schemas and scalability.</p>
                </div>


                <div className='card shadow-xl mb-2'>
                    <h1 className='text-2xl font-semibold text-orange-600'>Quaction: What is express js? What is Nest JS (google it)?</h1>
                    <h3 className='text-green-600 font-bold'>Answer: </h3>
                    <p><span className='text-orange-400 font-semibold'>js:</span>    is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web applications and APIs. Express.js allows developers to handle routing, middleware, and HTTP request/response handling with ease. It provides a range of features such as routing, middleware support, template engine integration, and easy access to request and response objects. Express.js is known for its flexibility, scalability, and extensive ecosystem of middleware and extensions. <br />

                    <span className='text-orange-400 font-semibold'> NestJS:</span>  is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features, providing a structured and modular architecture inspired by Angular (a popular front-end framework). NestJS emphasizes the use of decorators, dependency injection, and modules to build highly maintainable and extensible applications. It supports various transport layers, including HTTP, WebSockets, and microservices, and offers features like middleware, exception handling, authentication, and more. NestJS promotes the use of TypeScript's static typing and enables developers to build robust and scalable back-end applications following best practices.</p>
                </div>


                <div className='card shadow-xl mb-2'>
                    <h1 className='text-2xl font-semibold text-orange-600'>Quaction: What is MongoDB aggregate and how does it work (google it)? </h1>
                    <h3 className='text-green-600 font-bold'>Answer: </h3>
                    <p>MongoDB's aggregate is a powerful method used for data aggregation and processing within MongoDB. It allows you to perform advanced operations on your data, such as grouping, filtering, sorting, joining, and transforming, in a flexible and efficient manner. <br />
                    When using aggregate, it's important to carefully design and optimize your pipeline stages to ensure efficient execution. You can utilize various pipeline operators and techniques to take advantage of MongoDB's powerful aggregation capabilities. For more detailed information and examples, it's recommended to refer to the official MongoDB documentation on the aggregate method.</p>
                </div>
                

            </div>
        </div>
    );
};

export default Blogs;