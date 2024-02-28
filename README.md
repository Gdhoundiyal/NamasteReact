# NamasteReact

- npm is repository of packages (dependencies) which is required to make production ready app.

- dev dependency = it is required for development phase.
- normal dependency = it is required for development and production phase.

- ^ carate sign - it automatically update the major version

- package-lock.json keeps the exact version of packages.
- package.json keeps the

- npx means execution of paticular package ex- npx parcel "package name"

# Parcel

- it creates local server to run
- it automatically refresh the page using HMR (hot module replacement)
- it has file watching algorithm
- it bundle and compress all the files

# start Project

- see the start name in package.json scripts object

# JSX

- jsx is html like syntax
- jsx is javaScript syntax which is easier to create html elements
- camelcase is used to give attributes name

js Engine understand EcmaScript

- Babal = its transcompiler which convert code that browser understands.

# React functional Component

- a function that returns some piece of jsx.

# config driven UI

- when the web is driven by ui it is called config driven ui

# type of export

- named export
- default export

# react reconciliation

react virtual is a representation of actual dom

# useEffect / useState

- whenever state variable changes component Rerendered .
- first the component is rendered and then useEffect is called

# class based component( with LifeCycle Methods)

- firstly constructor is called ==>> then render is called ==>> then ComponentDidMount is called ==> then render is called with updated
  data ==> then componentDidUpdate is called ==> at last ComponentWillUnmount is called

- ComponentDidMount is used to make an api call beacuse it is called after the function is rendered properly

# Chunking / code spliting / dynamic bundling / lazy loading

in this we split our code in many JS file so that browser take less time to displaying things in ui. we use laxy() to do this
