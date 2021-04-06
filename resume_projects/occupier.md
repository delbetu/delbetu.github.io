# Description
Lease Administration Software

# Functionality
3 modules
* Accounting
Accountant import leases and add price/taxes calculates future payments.  
Generate general ledgers and export data to be included in accountant software.  

* Lease Admin

* Broker Lease
Broker can help to find a lease and negotiate its price along with compare them and track their lease status.

* Admin support

# key_contributions
* Build from scratch the accounting module
* Big Refactoring: Changing the implementation of calendar periods (lot of calculations depends on it)
from a json field representation into a separate table.
* Built a format independent long disclosures report using advance sql providing a modular solution.
* Include the review-approval process where an accountant works as part of a team that review each other's work

# key_technologies
* React
* Redux
* Redux Middleware
* Redux Thunk
* Redux Api Middleware
* React Router
* Material UI
* Formik
* Lodash
* Webpack
* Jest + Cypress
* Typescript

* Rails
* Fast JSON API
* Pundit Auth
* Administrate (Admin Dashboard)

* Postgres
* Heroku

# Story

# Common Questions
### Challenges
### Mistakes/Failures
### Enjoyed
### Leadership
### Conflicts
### What You'd Do Differently

# Code standards (patterns)

Backend  
* Service Objects
* Query Objects (filtering and sorting support)
* Policy Objects (Pundit)
* Decorators
* Jobs
* Serializers
* Devise Authentication

FrontEnd  
* Pages organization structure following UI
* Container-Component separation of duties
* Hooks
* Middleware
* Reducers
* Resources (resource + http-calls)
* Selectors (read from the store)
* Transforms (serialize+deserialize)
* Material UI + Formik + Yup.validations
* 


```
    ▾  features/
      ▾  leaseAccounting/
        ▾  components/
          ▸  journalEntries/
          ▾  measurement/
               amortize.test.ts
               amortize.ts
               decorator.ts
               fiscalAttributes.ts
               generateSchedule.ts
               util.test.ts
               util.ts
          ▸  remeasurement/
        ▾  pages/
          ▾  measurementForm/
            ▸  edit/
            ▸  new/
               calculateTI.test.ts
               calculateTI.ts
               Form.tsx
               Page.tsx
               util.test.ts
               util.ts
               validationSchema.test.ts
               validationSchema.ts
             util.test.ts
             util.ts
           paths.ts
           Routes.tsx
```

# Explain how data flows through the App
Write URL
SPA is served by backend
React Router parses url render component (home page)
Home page Container initiates the data-fetching process
Redux api middleware manages the request
When api returns it will call the appropiate transform with the result.
Transform will take a json object and return a javascript object
Middleware will save that object in the redux store
After container has components read using a selector from the store and render data and attach action callbacks to UI events (onChange)

