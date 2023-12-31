---
title: Create and Manage RBAC Roles Tutorial
linktitle: RBAC Roles
description: >
  In this tutorial, learn how to configure and use Role-Based Access Control (RBAC) for Armory Continuous Deployment-as-a-Service users.
categories: ["Tutorials"]
tags: ["RBAC"]
---

## Objectives

You are the CD-as-a-Service Organization Admin and lead a small development team that you want to invite to use CD-as-a-Service. Before you add your team, you need to create roles that define what a user can see in the UI.


In this tutorial, you learn how to:

* [Define and add RBAC roles](#define-and-add-rbac-roles) in a YAML file.
* [Invite users and assign roles](#invite-users-and-assign-roles).
* [Modify your RBAC roles](#modify-your-rbac-roles).


## {{% heading "prereq" %}}

* You have completed the Armory CD-as-a-Service [quickstart]({{< ref "get-started/quickstart" >}}), in which you create your login credentials, install the CLI, and deploy an example app.
* You are familiar with the following content:

    * {{< linkWithTitle "iam/_index.md" >}}
    * {{< linkWithTitle "iam/manage-rbac-roles.md" >}}

## Define and add RBAC roles
<!-- add an M2M role once that's implemented in the UI -->

You want to create the following roles for your team:

| Name         | Description                                                      | Tenant | Grant Type | Grant Resource | Grant Permission |
|--------------|------------------------------------------------------------------|--------|------------|----------------|------------------|
| Tenant Admin | Same grants as the Org Admin but scoped to the tenant            | main   | api        | tenant         | full             |
| Deployer     | Engineer who can deploy apps using the CLI and monitor in the UI | main   | api        | deployment    | full             |
| Tester       | Tester who can deploy apps using the CLI and monitor in the UI   | main   | api        | deployment    | full             |


Create a file called `config.yml`.  Add the following content, which deliberately contains a few mistakes:

```yaml
---
roles:
  - name: Tenant Admin
    tenant: main
    grants:
      - type: api
        resource: tenant
        permission: full
  - name: Deployer
    tenant: main
    grants:
      - type: api
        resource: tenant
        permission: full
  - name: Tester
    tenant: main
    grants:
      - type: api
        resource: tenant
        permission: full
```

In the directory where you saved your `config.yml` file, log into CD-as-a-Service using the CLI and then execute:

```bash
armory config apply -f config.yml
```

Then check that the roles are correct by executing:

```bash
armory config get
```

The output should match the contents of your `config.yml` file.

## Invite users and assign roles

1. Access the [CD-as-a-Service Console](https://console.cloud.armory.io).
1. Navigate to **Access Management** > **Users**.
1. Click **Invite Users**
1. Enter the new user's full name in the **Name** field and the user's email address in the **Email** field.
1. Select the **Tenant Admin** role from the **Roles** drop down list.
1. Click **Send Invitation**.
1. A modal window opens. Review the information and click **OK** to send the information or **Cancel** to return to the previous screen.

Repeat the process for the Deployer and Tester roles.

<!--
## Create Client Credentials and assign a role

1. Access the [CD-as-a-Service Console](https://console.cloud.armory.io).
1. Navigate to **Access Management** > **Client Credentials**.

-->



## Modify your RBAC roles

Due to a hasty copy/paste, you inadvertently granted the Deployer and Tester roles full access to the main tenant. You need to change that. Also, since Deployer and Tester have the same grants, you want to eliminate the Tester role. You can do both in a single update to your `config.yml` file:

1. Add the `allowAutoDelete: true` line and remove the Tester role entry.
1. Change `tenant` to `deployment` in the Deployer role config.

Your config should look like this:

{{< highlight yaml "linenos=table, hl_lines=2 14" >}}
---
allowAutoDelete: true
roles:
  - name: Tenant Admin
    tenant: main
    grants:
      - type: api
        resource: tenant
        permission: full
  - name: Deployer
    tenant: main
    grants:
      - type: api
        resource: deployment
        permission: full
{{< /highlight >}}

Execute:

```bash
armory config apply -f config.yml
```

Then check that the roles are correct by running:

```bash
armory config get
```

Lastly, since you eliminiated the Tester role, you need to update the user you originally assigned the Tester role. Access that user in the **Access Management** > **Users** screen and edit the user to assign the Deployer role.

## {{% heading "nextSteps" %}}

* {{< linkWithTitle "troubleshoOting/rbac.md" >}}