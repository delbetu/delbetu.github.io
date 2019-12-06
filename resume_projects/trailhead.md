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

