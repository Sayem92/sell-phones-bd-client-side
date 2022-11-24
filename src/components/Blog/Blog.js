import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">

                    {/* first  */}

                    <div className='mb-16'>
                        <img className="object-cover object-center w-full lg:w-96 h-64 rounded-lg lg:h-full" src="https://i.ibb.co/q0bC5Hs/react-state.jpg" alt="" />

                        <div className="mt-8">
                            <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
                                What are the different ways to manage a state in a React application ?
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                The Four Kinds of React State to Manage: ✍Local state ✍URL state ✍Server state ✍Global state. Let's cover each of these in detail: ocal (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global. Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                            </p>
                        </div>
                    </div>

                    {/* second  */}

                    <div className='mb-16'>
                        <img className="object-cover object-center w-full lg:w-96 h-64 rounded-lg lg:h-full" src="https://i.ibb.co/hR12g7N/proyotypical.png" alt="" />

                        <div className="mt-8">
                            <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
                                How does prototypical inheritance work ?
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </div>
                    </div>

                    {/* third  */}

                    <div className='mb-16'>
                        <img className="object-cover object-center w-full lg:w-96 h-64 rounded-lg lg:h-full" src="https://i.ibb.co/TYGL85w/Unit-Test-Method.webp" alt="" />

                        <div className="mt-8">
                            <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
                                What is a unit test? Why should we write unit tests ?
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
                            </p>
                        </div>
                    </div>

                    {/* four */}

                    <div className='mb-16'>
                        <img className="object-cover object-center w-full lg:w-96 h-64 rounded-lg lg:h-full" src="https://i.ibb.co/tzbCtXK/compare.jpg" alt="" />

                        <div className="mt-8">
                            <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
                                React vs. Angular vs. Vue ?
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.Further reading: Vue.js Tutorial for Beginner Developers.
                            </p>
                        </div>
                    </div>

                </div>
            </section >
        </div>

    );
};

export default Blog;