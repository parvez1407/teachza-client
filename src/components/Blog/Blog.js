import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-success text-center fs-1 fw-bold mb-4'>Welcome to my blog</h3>
            <div className='text-white border border-1 border-success p-3 rounded-3 mb-3'>
                <h4>1. what is cors?</h4>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='text-white border border-1 border-success p-3 rounded-3 mb-3'>
                <h4>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Some Other Authentication Platforms are: .STYTCH .Ory .Supabase .Okta .PingIdentity .Keycloak .Frontegg .Authress</p>
            </div>
            <div className='text-white border border-1 border-success p-3 rounded-3 mb-3'>
                <h4>3.How does the private route work?</h4>
                <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>
            <div className='text-white border border-1 border-success p-3 rounded-3 mb-3'>
                <h4>4. What is Node? How does Node work?</h4>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. <br /> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node. </p>
            </div>
        </div>
    );
};

export default Blog;