import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className='text-3xl font-bold text-center'>There is some necessery information and Some common FAQ. </h1>
                    <div className='w-5/6 mx-auto my-10 grid grid-cols-1 gap-6 '>
                        <div tabIndex={1} className="collapse collapse-plus border border-sky-400 bg-gray-200 rounded-box shadow-lg">
                            <div className="collapse-title text-xl font-medium">
                                What is the Difference between SQL and NoSQL ?
                            </div>
                            <div className="collapse-content">
                                <p>SQL Database is a Relational Database and a structured one whereas NoSQL is a Non-relational database likely to be more document and distributed than structured.
                                    Relational database strictly adheres relations where it is divided into the set of rows and columns to store data often named as tables, but the Non-relational database has a document-oriented or distributed storage which doesn’t require any table structure.
                                    NoSQL databases have a dynamic schema for document type or unstructured data whereas SQL Databases have a well-designed pre-defined schema.
                                    SQL databases are vertically scalable whereas NoSQL databases are horizontally scalable. You can scale the SQL databases by expanding the strength of its hardware. Similarly, when it comes to NoSQL databases you can scale it by expanding the database servers in the pool of assets to lessen the heap.
                                    While SQL uses structured query language for defining data, NoSQL uses the collection of documents which is also known as UnQL (Unstructured Query Language).
                                    NoSQL uses hierarchical data storage, and there is no hierarchical data storage for SQL.
                                    We can easily add the new data in NoSQL without requiring prior steps whereas SQL might require doing some changes like backfilling data, altering schemas.
                                    Since SQL has a standard interface for handling complex queries, it would be great to deal with complex queries. Feebly, we don’t have any standard interface in NoSQL, so it’s quite difficult to handle complex queries in NoSQL.</p>
                            </div>
                        </div>
                        <div tabIndex={2} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                What is JWT, and how does it work?
                            </div>
                            <div className="collapse-content">
                                <p> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                            </div>
                        </div>
                        <div tabIndex={3} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                What is the difference between javascript and NodeJS?
                            </div>
                            <div className="collapse-content">
                                <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                            </div>
                        </div>
                        <div tabIndex={3} className="collapse collapse-plus border shadow-lg border-sky-400 bg-gray-200 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                How does NodeJS handle multiple requests at the same time?
                            </div>
                            <div className="collapse-content">
                                <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;