```yaml
webhooks:
  - name: <webhook-name>
    method: <endpoint-method-type>
    uriTemplate: <endpoint-uri>
    networkMode: <network-mode>
    agentIdentifier: <remote-network-agent-id>
    headers:
      - key: Authorization
        value: <auth-type-and-value>
    bodyTemplate:
      inline: >-
      {
      }
    retryCount: <num-retries>
```

* `name`: the unique name of your webhook

* `method`: (Required) REST API method type of the webhook

* `uriTemplate`: (Required) webhook URL; supports placeholders that are replaced at runtime

* `networkMode`: (Optional; Default: `direct`) `direct` or `remoteNetworkAgent`; `direct` means a direct connection to the internet; if your webhook is not internet-accessible, use the `remoteNetworkAgent` as a proxy.

* `agentIdentifier`: (Optional) Use when `networkMode` is `remoteNetworkAgent`; the Remote Network Agent identifier to use as a proxy; the identifier must match the **Agent Identifier** value listed on the **Agents** UI screen; if not specified, Armory CD-as-a-Service uses the Remote Network Agent associated with the environment account.

* `headers`: (Optional) Request headers; the `Authorization` header is required if your webhook requires authorization. Also supports use of `context` and `armory` provided variables.

* `bodyTemplate`: (Optional) the body of the REST API request; the inline content depends on the endpoint you are calling.

* `retryCount`: (Optional; Default: 0) if the first connection attempt fails, the number of retries before failing and declaring that the webhook cannot be reached.

* `disableCallback`: (Optional; Default: false) if set to `true`, Armory CD-as-a-Service does not wait for a callback before moving on to the next deployment step.

**Callback URI**

You must pass the callback URI as `{{armory.callbackUri}}/callback`. Armory CD-as-a-Service generates the value for `armory.callbackUri` and fills it in at runtime.

Where you configure the callback URI depends on your external automation tool. If you use a GitHub workflow, for example, you configure the callback URI in the `inline` section of the `bodyTemplate`.
