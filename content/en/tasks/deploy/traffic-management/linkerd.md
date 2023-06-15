---
title: Configure Traffic Management With Linkerd
linkTitle: Linkerd
description: >
  Configure your Armory CD-as-a-Service deployment to use Linkerd for traffic management.
aliases:
  - /cd-as-a-service/tasks/deploy/traffic-management/
categories: ["Guides"]
tags: ["Deployment", "Traffic Management", "Linkerd", "Deploy Config"]
---

## {{% heading "prereq" %}}

* You have read {{< linkWithTitle "concepts/deployment/traffic-management/smi-linkerd.md" >}}.
* In your target Kubernetes cluster, you have deployed Linkerd, a service mesh that complies with the [Service Mesh Interface (SMI) spec](https://github.com/servicemeshinterface/smi-spec).
* You know [how to create a CD-as-a-Service deployment config file]({{< ref "tasks/deploy/create-deploy-config" >}}).

>CD-as-a-Service does not configure proxy sidecar injection.

## Configure traffic management

Add a top-level `trafficManagement.targets` section to your deployment file.

{{< include "cdaas/dep-file/tm-smi-config.md" >}}

## {{% heading "nextSteps" %}}

* {{< linkWithTitle "reference/ref-deployment-file.md" >}}