# aws-nodejs-typescript++

## BLUF

If you want to use the contents of this project as the starter template for your own serverless framework project, use the following command to do so:

```bash
sls create --template-url https://github.com/krisgholson/serverless-templates/tree/master/aws-nodejs-typescript --path my-service
```

## TLDR?

This is a template project that uses the [serverless framework](https://www.serverless.com/) and your humble correspondent's opinionated view of what he believes is a good starting point for a nodejs function as a service (FAAS) deployed to AWS. It was generated from the already excellent starter template that the serverless team makes available here .. https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-nodejs-typescript .. and which can be used to scaffold out your own serverless project using this command:

```bash
sls create --template aws-nodejs-typescript
```

Your humble correspondent added some things to the project that he (and maybe a few others) consider best practices and then created this project and repo to capture them for himself and others to use when setting up a new serverless framework project. The serverless command that you would use to scaffold out your own project based on this one is:

```bash
sls create --template-url https://github.com/krisgholson/serverless-templates/tree/master/aws-nodejs-typescript --path my-service
```

You get the idea. 

Feel free to submit a pull request if I've completely missed the boat on my "best practices", or, just use this project as the basis for your own "best practices" template for your own serverless projects.

## Commands

Run unit tests
```bash
yarn test
```

Deploy to AWS (script in package.json uses sls to deploy)
```bash
yarn deploy --aws-profile [your-aws-profile-name] --region [your-aws-region]

# e.g.
yarn deploy --aws-profile my_profile --region us-east-2
```

Start local development server (using the serverless-offline plugin)
```bash
yarn start
```

I've included some bulleted high-level opinions below. There are also comments sprinkled throughout code and configuration to point to resources that I drew my opinions from. Thank you to all those serverless users and bloggers out there sharing their lessons learned! 

## My Opinions
* AWS Lambda is a game changer. It and other AWS managed services are the way to go to quickly deliver value to customers (and will almost always be less expensive when you are in the startup phase and proving out whether you have a viable application and company). You WILL lock yourself into AWS as a service provider with this approach; you'll be in good company though.
* use [jest](https://jestjs.io/) for testing
* use nodejs lambda functions (because javascript is eating the world)
* pack your functions with webpack to ensure that the final code bundle is as small as possible (faster cold starts)
* lint with eslint (https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)


## Resources
* https://pages.awscloud.com/Optimizing-Lambda-Performance-for-Your-Serverless-Applications_2020_0316-SRV_OD.html
* https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project