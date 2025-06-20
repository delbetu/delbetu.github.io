# Description
Commercial Real Estate
Lease Administration Software
Lease Accounting

# Product Challenges
- Devs are responsible for everything: requirements, design, implement, monitor, triage/debug-issues, qa, implement(frontend/backend/testing)
- Customizable Reporting
- Industry Standard Compliance: IFRS ASC42 (customers from different countries follow different standards), thorough testing strategy
- Multi-Tenancy and Role-Based Access: Data-Isolation, Ensure 
- Integrating with 3rd party (not yet)

# Project Size
142k lines (Aug 2023)
213 controllers
116 models
18 mailers
60k lines of Javascript

# Non functional Info
- performance: response times, throughput, resource utilization
- scalability: heroku
- availability: heroku
- security: dev best practices + infrastructure configuration??
- usability: UI/UX on every epic design
- maintainability: dev best practices (test, qa, review, discussions)
- extensibility: Integrations with 3rd party APIs?
- data management: automatic backups by heroku
- compliance: ASC42, IRFS
- monitoring: logging: heroku logs, error_tracking: sentry, performance_tracking: Skylight, performance_analytics: Skylight, performance_alerting: ??

# Functionality
* Accounting  
  Double Entry Bookkeping (Every Entry to an account requires a corresponding opposite to another account) (credit & debit)
  Assets(company owns) = Liabilities(company owes) + Equity(company net worth)
  Ensure compilance with lease accounting standards ASC842 and IFRS16
  Calculating lease payments: Autogenerating lease transactions by Measuring leases
  Automatic Recording of books' entries: Journal Entries
  Chart of accounts: List Accounts used to track transactions are classified (have type of transaction asset liability revenue expense) and have its own balance.
  Preparing financial statements: Journal Entries, Accounts(credits&debits) to explain how money flows
  Provide analysis and insights: Trail Balance & Disclosures Reports to help strategic decision making

* Lease Admin  
  Maintain Accurate Lease Data (lease terms, asset, rent, additiona rent, incentives, clauses, custom data)
  Rent Rules
  Percentage Rent is when tenant is to obligated to pay a percentage of their sales revenue, but only when passign a threshold.
  Free Rent: Months that not need to be payed
  Escalations: Increases over time (usually due to inflation adjustment) e.g 5% yearly
  Additional Rent: Rent is divided into Base + Additional. Additional involves electricity, insurance, utilities and other charges that tenant must pay
  Incentives: when landlord provides some discount as incentive for the tenant to sign the contract

* Broker Lease  
  Broker can help to find a lease and negotiate its price along with compare them and track their lease status.

* Admin support  
  Someone from occupier customer support that helps onboarding new customers
  Fixing data when customers

# role-responsiblities
## Individual Contributor
* Writing down requirements
* In depth reviewing other's Work
* Perform Code Reviews
* Ship working maintainable, tested, robust, clean, code that solves real problems

## Team Lead
Ensure the team plans, design and executes effectively.
* Primary Engineering point of contact for Product
* Primary technical point of contact for other engineers on the team
* Meet 1:1 with VP to discuss individual and team process
* Unblock teammates
* Write RFCs describing how we might solve a problem proposed by the PM
* Give feedback on designs from engineering perspective
* Break large problems into smaller ones
* Help product write shortcut epics & tickets
* Enforce team-wide stnadards & best-practices around coding, testing, etc.

# key_contributions
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

# Stories

## FTP Scheduled Exports

**Problem**   
A customer mentioned that in order to integrate with their system they could receive their data every month on a csv format over SFTP.   
Our current scheduled exports only deliver via email so Occupier decided to support other delivery methods.  
In particular FTP/SFTP/S3  
**Solution**   
Erik started coding a POC in order to assess feasibility.  
Then assigned the feature to Marcos who reviewed the code and validated the architecture with Krishan before start coding.  
Marcos did some adjustments to the code and coded a solution.  
Including dummy docker servers, updated the documentation, test and missing features such us `send-it-now`.  
  
tech difficulties:     
* encrypting sensitive data  
* dealing with external servers using FTP/SFTP/S3 requires time to setup and test  

Carlos took the time to thorough review and QA all the code and helped elevate its overall quality.  
Krishan did a final review  

**Results**  
* Review process was slow due to the amount of changes introduced in only 1 PR. Learning: Maybe split into multiple smaller PRs might accelerate the code review process  
* Customer was able to use the feature in production. He was satisfied with the functionality except for payments and journal entries which we will be able to release after having relative time filters in production.


## Highligth exceptions/errors

business impact: cuando viene un nuevo usuario tenemos que tomar todos sus datos en papel y pasarlos a 
occupier, luego interactua con gente de customer success que se fija si los datos tienen errores y se
comunica con el usuario. Todo esto es un proceso muy manual que puede ser hecho como parte de la aplicacion.
CS-team marca los problemas en los datos en la plataforma el usuario los puede ver claramente y sabe que tiene que hacer.
Esto agilita el proceso ahorrando tiempo a los usuarios y a cs-team.

Para esto decidimos mejorar las tasks ya que notamos que era una feature muy utilizada y amada por los clientes.

TODO: continue.....


## Payables & Vendors

problem:
  rent-roll is the monthly process of identifying the correct rent and expenses that need to be paid to landlord and other vendors
  In practice, this means reviewing the lease administration data for a given time period to identify estimated expenses, and reconciling that data with invoices or other sources of payment information in order to produce a final report of all the expenses that need to be paid. 
Today is a manual, expensive and time-consuming process.

business impact:
* Open market to enterprise customers
* Increases retention by providing existing customters with more functionality

technical challenges:
* report can be imported into multiple customer' systems, so it must have customizable columns
* user can select which columns want to export
* user can create new columns (custom data)
* report contains data from multiple tables (payables, vendors, leases) custom data from multiple tables.



## Scheduled Exports
### Problem

Automate data extraction for our customers, so they can create scripts to integrate with their own tools.

### Solution

Allow users to schedule exports to be sent out on a regular basis.
So they can receive the data on their emails and process it from there.

### Results

Until now Nov 7 we were able to plan and implement a phase 1 of the project.
We expect to gain feedback from it in order to determine if it worth investing more time on improvements.

### What went wrong?
pending

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
Problem:  
Exports consuming too much memory from our main server node.
Large exports were taking long time to process and giving timeouts errors for some big customers.

Solution:  
Tansition all existing exports to background exports.  
Export runs in background  
File is uploaded to S3 and a temporary link is created.  
An email is sent to the requester user with that link.  
File is not attached to avoid emails from being spammed.  
Result:  


### Challenges
The transition of each export should be easy to implement.  
Only one Graphql endpoint receiving the name of the export as parameter  

## Icentives
Problem:  
Accounting needed to support leases with incentives.  
Incentives are a payment from the landlord to the tenant.  
And as such impact the financial statements  

Solution:  
challenge: Requirements were very vague described.  
  Took initiative and reach out people with questions.  
  Wrote down example scenarios and share for feedback.  
  Found several important problems that were missed at that point.  
  Meet several times with team members in order to ensure my understanding was correct.  
  Modeled a solution and planned the work, splitting down into stories.  
  Executed the plan (programmed) splitting into small PR explaining how things work and why.  
challenge: Enabling the feature only for certain accounts  
  I had to define a place for user setting enablig or disabling the feature.  
Dealing with two different logics in multiple places depending on the feature-flag enabled or not.  
challenge: existing data had to be adapted.  
(data migration needs to run right before the deployment otherwise we could have wrong records)  

Result:  
Took a few weeks to accomplish.  
Presented my work on weekly meetings.  
Monitor production release and check for bugs  

# Common Questions
 Challenges  
 Mistakes/Failures  
 Enjoyed  
 Leadership  
 Conflicts  
 What You'd Do Differently  

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
