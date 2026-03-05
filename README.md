# Hcode Website

This website is created in **Next Js** but it is hosted in AWS S3 and cloudfront i.e. without server. So while doing the developing please avoid server function that next js provide, if you try to include the server function then you won't be able to deploy on S3 bucket.

### Git Branch Structure:

```
Main : Production Ready code for deployment
Deploy : Dev ready code for testing
```

## Final Steps for Production Deployment Steps for AWS S3 Buckets

```
yarn build
yarn deploy
```

## Steps to configure the AWS cli for Deployment

```
Install awscli first and run aws configure command with the correct key and secret params
```

**Reference Docs AWS:** https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## S3 bucket link

```
http://hcode.tech.s3-website-us-east-1.amazonaws.com/
```
