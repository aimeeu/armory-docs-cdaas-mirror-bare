---
title: Deploy an App Using Client Credentials
linkTitle: Deploy with Credentials
weight: 10
description: >
  Use the CLI to deploy an app using CD-as-a-Service machine to machine credentials.
categories: ["Deployment", "Guides"]
tags: ["Credentials", "Automation", "CLI"]
---

## Deploy your app using a Client ID and Client Secret

When you want to script a CLI deployment, you can pass your Client ID and Client Secret to the `deploy` command instead of separately logging into CD-as-a-Service using the CLI.  

## {{% heading "prereq" %}}

You have [created machine to machine client credentials]({{< ref "iam/manage-client-creds.md" >}}) and have access to your Client ID and Client Secret values.

## Deploy your app

```bash
armory deploy start  -c <your-client-id> -s <your-client-secret> -f <your-deploy.yaml>
```
