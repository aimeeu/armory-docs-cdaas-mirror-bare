---
title: Construct Retrospective Analysis Queries for Canary Analysis
linktitle: Construct Queries
weight: 5
description: >
  Learn how to construct retrospective analysis queries that you can then use for your canary strategy.
categories: ["Canary Analysis", "Features", "Guides"]
tags: ["Deploy Strategy", "Canary", "Retrospective Analysis"]
---

## {{% heading "prereq" %}}

You need to integrate your Metrics provider. See the {{< linkWithTitle "canary-analysis/integrate-metrics-provider.md" >}} guide for details.

## How to Perform a retrospective analysis

To perform retrospective analysis, you need to provide the following:

- **Metrics Provider**: The metrics provider that you want to use.
- **Analysis Range**: The time range that you want to analyze.
- **Queries**: One or more query templates to use for the analysis. For the query template, you need the following:
   - Name: Provide a descriptive name
   - Upper Limit:
   - Lower Limit:
   - Query Template
- **Context**: Key/Value pair for the substitutable template variables in your query templates.

Armory supports the following time related variables out of the box:

- `armory.startTimeIso8601`
- `armory.startTimeEpochSeconds`
- `armory.startTimeEpochMillis`
- `armory.endTimeIso8601`
- `armory.endTimeEpochSeconds`
- `armory.endTimeEpochMillis`
- `armory.intervalMillis`
- `armory.intervalSeconds`
- `armory.promQlStepInterval`

You do not need to provide these variables in the context.

In addition to the time related variables, Armory CD-as-a-Service provides an additional set of variables that you must add these manually as part of the context when performing retrospective analysis. They are automatically substituted in queries that are part of your deploy file.

- `armory.deploymentId`
- `armory.applicationName`
- `armory.environmentName`
- `armory.replicaSetName`

You can also add your own custom variables as key/value pairs. If you want to use these custom variables, you need to add them to [`strategies.<strategyName>.<strategy>.steps.analysis.context` section in your deployment file]({{< ref "reference/deployment/config-file/strategies" >}}).

### Export and add a query to your deploy file

You can generate the YAML equivalent of your query to use in your deploy file.

1. From the analysis screen, select **Go back to Analysis Configuration**.
1. Click **Export Queries for Armory Deployments**. This creates the YAML block for the `analysis` portion of your deploy file.
1. Insert the YAML block into your deploy file at the bottom.

## {{% heading "nextSteps" %}}

* {{< linkWithTitle "reference/canary-analysis-query.md" >}}
* {{< linkWithTitle "reference/context-variables.md" >}}