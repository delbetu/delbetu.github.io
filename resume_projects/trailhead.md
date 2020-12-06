## Describe one scenario where your deployed application had a bottleneck - how did you realize you had the bottleneck, how did you determine the root cause, and how did you decide on the best fix? (Required)
My first job at Trailhead was to optimize the execution time of an async job which was running on Jenkins.
I paired with a more experienced developer to get an idea of how the task accomplished the job.
After getting an idea of how it was implemented, I noticed that most of the time was being spent performing I/O operations, in particular uploading images one by one.
At that point, we realized that uploading multiple images concurrently would dramatically improve the execution time, so that is what I did, parallelized execution by using threads give us a simple solution which improved the execution time by 80%.
We could use another parallelization technique such as enqueuing a specific uploading-image job per each image (or subset) that may work ok but would introduce other problems such as "how do we know when it finishes?"
So we decided that threads were good enough.

## Have you integrated with 3rd party application/platform using their REST (not SOAP) APIs? If yes, describe the most interesting integration you have done.
As part of content processing, I had to integrate with Cloudinary and S3 to store/retrieve images.
We had to use both services because Cloudinary offered bandwidth optimization while S3 offered private links.

Since we were handling images from salesforce customers we needed to store them under a private scope.
We accomplished that by using S3 Presigned URLs (which gives you a temporal link)

Trailhead offers a lot of publicly accessible courses, those courses are much more requested than the private ones for that case saving bandwidth is a big win.
Cloudinary offered image transformations, if you store a 10MB image it can convert it and send you a smaller 1mb image.

## Describe most interesting RoR project, and why it was interesting for you.
Trailhead is the e-learning platform developed by Salesforce.

Trailhead started being a standalone RoR application, during the course of three years it transformed completely into many distributed applications.
There were several API Ror projects along with several FrontEnd React apps.
Integrate with multiple external services such as fastly-CDN, cloudinary, S3, coveo search, Sumologic, New Relic, Salesfoce-Login
All the different applications are developed by different teams, and all of them are deployed to Heroku.
Right now the two native mobile apps are being developed.
We had to build our Odata API using an internal framework. That adapted Odata for Ruby.

It was interesting to be a witness and active contributor to this transformation.
I've learned a lot during that time and contribute to some of the most impact projects of the product.



Trailhead 

Description

Trailhead.salesforce.com 
https://www.youtube.com/watch?v=Y8c2Ie3ammM

Summary
Trailhead is an e-learning platform.

funcionalidad: 
- Final users complete courses and get rewarded with badges.
- Multiple editor's team create/preview/release content every 15 days 
- Multitenancy: Trailhead for companies. Coca Cola can use Trailhead for creating their own content for onboarding new employees.
tamano:
- The product is built upon multiple applications
    - Web app(RoR/React) connect with Core app (Rails Engine/Postgres), supports 3.0000 users
    - Mobile app 
    - For editor's team Content Service API (Sidekiq async processing)
        - Multiple clients
            - Legacy Pipeline (Jenkins task automation)
            - Trailmaker (React) for creating courses 
    - Integrates with:
        - TBID (multiple strategies for sign-in/up)
            - social logins
            - salesforce
            - others
        - Coveo Search
        - Cloudinary/S3 for images
        - Fastly CDN (creating subdomains automatically)
- Hosted on heroku.

I've worked mostly on backend(rails) but ocasionality on frontend(react)


Cuando te preguntan en que trabajaste
Entonces puedo hacer un resumen de estos
￼
￼
￼

Functionality
* trailblazer user 
    * user
    * Signup 
    * Social login 
    * Sf login 
    * Account merge 
* Trailmix 
    * Create 
    * Assign 
* User Activity 
    * Complete content 
    * Award badge 
* Explore content 
    * Search 
    * Tags 
    * Favorite 
* Automatic release selector 
* Writers teams user 
    * Content Ingestion ( versioned content)
        * Create release 
        * Create manifest 
        * Push content 
        * Preview release 
        * Publish release content 

Multi tenancy support 
* Customer sf organizations can create content using our same flow and tools 
* Inter organization content protection
* Auto scope 
* Automatic filter by orgid 

Key Contributions 
* Content versioning 
    * crc table
    * Index of content for each release 
    * Maintain latest content versions  for each release 
    * Polymorphic ar table 
    * Release-id + api_name as content identifier 
    * Use both when joining with other tables 
    * Release-ids come from context

* Image processing 
    * for multi tenancy images keep privates to each organization 
    * Store images under .org-id remote folder and the proxy the images 
    * Served html contains/partial/image/path 
    * Our proxy completes the s3 url 
    * Fetch that and render the raw image in the document 
    * Client can’t access image url 
* This was simplified with signed temporal s3 urls 


Problem 
* user in progress unit and leaves computer 
* New version is published 
* User comes back and continues y

* Should he see the new version???
* Our system keeps started version 
Same if unit is deleted 

Key technologies
* Rails
* Postgres
* Puma
* Sidekiq
* Heroku
* React
* Jwt
* Globalize
* Cloudinary
* S3
* Swagger
* Jenkins


Information

Delivered Features
—————————————
*Trailhead API (v1):*
*Trailmaker Content:*
*Trail Tracker:*
*Trailmix v1 API and Assignments:*
*Trailmaker Release:*
*Private Content Search:*
*Retrofit Pipeline (Jenkins):*
*Secure Image Management:*
*Authorization Service:*
*Permission Set License:*
*Packcheck*
*Release Check*
*Add-to-Release*
*Subdomains*
*Signed Image URLS*
*Limits and Monitoring*
*Content Service / myTrailhead architect:*
*Prodsec:*
*Performance:*
*L10n:* 
—————————————

Story: The importance of good logging

There are a lot of simple problems that triaging is harder than solving them.
Typically you find uncovered cases in production.
Triaging could imply:
* take hours
* involve multiple engineers
* investigate wrong problems
All of this is waste of time and possibly dev-frustration.
If production --> act under pressure

* Interactor gem
    * Introduce a defined place for business logic
    * Easy to represent a workflows
    * Downside --> Swallow exceptions, it  uses it own exception handling
        * No even NewRelic or Sumologic will see this exception

I realized that was going to be a pain
* InteractorLogger
    * Log all the steps
    * Feature flag

No one knew about it
In daily standup
* We're blocked with this issue we don't know what was happening
* I suggest to activate Logger
* Then they found the issue pretty quick
* They were very thankful

Tell me about a challenging situation.
Story: Situation Action Result
Lo mas challenging que me ha tocado hacer fue implementar lo de las imagenes.
pero es muy generico
mas especifico
problemas:
* durante la implementacion descubri que habia atributos redundantes en la base de datos que debieron haber sido borrados pero como no se borraron luego fueron utilizados erronamente
* las imagenes privadas no pueden ser vistas por personas de otras companias
    * Como haces para prevenir que un usuario de coca cola pueda recibir una imagen de pepsi
        * Guardamos las imagenes bajo una ruta diferente para cada company /images/coke and /images/pepsi
        * Cuando un usuario solicitaba imagen de coke nos fijabamos que las companies del usuaario contengan a coke (para validar el permiso)
        * Recordemos esta img url va dentro de un html
        * Cuando ese html es recibido por el server este solicita la imagen
        * Debido a que debiamos realizar un control de acceso tuvimos que implementar un image-proxy nosotros mismos.


