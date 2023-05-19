# Description
Lease Administration Software
Lease Accounting

# Functionality
3 modules
* Accounting
Accountant import leases and add price/taxes calculates future payments.
Generate general ledgers and export data to be included in accountant software.

* Lease Admin
* Rent Rules
* Percentage Rent is when tenant is to obligated to pay a percentage of their sales revenue, but only when passign a threshold.
* Free Rent: Months that not need to be payed
* Escalations: Increases over time (usually due to inflation adjustment) e.g 5% yearly
* Additional Rent: Rent is divided into Base + Additional. Additional involves electricity, insurance, utilities and other charges that tenant must pay
* Incentives: when landlord provides some discount as incentive for the tenant to sign the contract

* Broker Lease
Broker can help to find a lease and negotiate its price along with compare them and track their lease status.

* Admin support

# key_contributions
* Writing down requirements
* In depth reviewing other's Work
* Organizing tech talks
* Helping with hiring process, taking technical interviews and finding candidates
* Build from scratch the accounting module
* Big Refactoring: Changing the implementation of calendar periods (lot of calculations depends on it)
from a json field representation into a separate table).
* Built a format independent long disclosures report using advance sql providing a modular solution.
* Include the review-approval process where an accountant works as part of a team that review each other's work

# key_technologies
 * React:
   ...Redux,Redux Middleware,Redux Thunk,Redux Api Middleware,React Router,Material UI,Formik,Lodash,Webpack,Jest + Cypress,Typescript

* Rails:
  ...Fast JSON API,Pundit Auth,Administrate (Admin Dashboard)

Postgres, Redis, Heroku

# Story

## Variance Report - Expense Type Breakdown

### Problem
Today, the Variance Report contains the sum total of Base Rent and every Additional Expense. We call this Total Rent. However, users don't want to see the difference in Total Rent between January and February, they want to see any differences in Base Rent, CAM, Utilities, etc...
Therefore, we should include every expense type in the variance report.

### Solution
Show variances by expense type

### Results
Project was released to production, some bugs were detected and fixed after that.

## Rent obligations report
### Problem
Customers weren't able to filter the report to met their expectations, making this feature not very usable for them since it was producing docens of columns (one per month).

### Solution
Enhance report to support filter by many attributes, in particular the filtering for expense type was a special case.
Filtering by expense type and period ranges were where the difficulty relied since it wasn't standard code.

### Results
The project was investigated, designed, released to production, got feedback and issues were solved.

### What went wrong?
We didn't release behind feature flag so at some point we offered functionality that wasn't worked as expected.



## Notifications (Critical Dates + Portfolio Digest)
### Problem
Portfolio digest was providing not very useful information for the user, and missing other important information.
Critical dates weren't much useful because it lacks of customization

### Solution
Highlight important information on portfolio digest.
Make portfolio digest content customizable (which content should include and when should be included).
Make critical dates notification customizable (when start sending and frequency).

### Results
Notifications was delivered after initially estimated.
People is using it?
No major issues were found after the release.
Other problems were solved on its way. We detected that alerts recreation were not working properly in the past and we fixed it.
QA process was good.



## Background Exports
Problem: Exports consuming too much memory from our main server node.
Large exports were taking long time to process and giving timeouts errors for some big customers.
Solution: Tansition all existing exports to background exports.
Export runs in background
File is uploaded to S3 and a temporary link is created.
An email is sent to the requester user with that link.
File is not attached to avoid emails from being spammed.

### Challenges
The transition of each export should be easy to implement.
Only one Graphql endpoint receiving the name of the export as parameter 
... TODO 

## Icentives
Took a few weeks to accomplish.
Requirements were very vague described.
Took initiative and reach out people with questions.
Wrote down example scenarios and share for feedback.
Found several important problems that were missed at that point.
Meet several times with team members in order to ensure my understanding was correct.
Modeled a solution and planned the work, splitting down into stories.
Executed the plan (programmed) splitting into small PR explaining how things work and why.
Put that behind feature flag, anticipated to possible things that could go wrong.
(data migration needs to run right before the deployment otherwise we could have wrong records)
Presented my work on weekly meetings.
Monitor production release and check for bugs

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
