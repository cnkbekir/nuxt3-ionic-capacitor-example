import { NewRelicCapacitorPlugin, NREnums, AgentConfiguration } from '@newrelic/newrelic-capacitor-plugin';
import { Capacitor } from '@capacitor/core';


export default defineNuxtPlugin(() => {

  const config = useRuntimeConfig();
  var appToken;
  if (Capacitor.getPlatform() === 'ios') {
    appToken = config.public.newrelicIosToken;
  } else {
    appToken = config.public.newrelicAndroidToken;
  }

  let agentConfig: AgentConfiguration = {
    //Android Specific
    // Optional:Enable or disable collection of event data.
    analyticsEventEnabled: true,

    // Optional:Enable or disable crash reporting.
    crashReportingEnabled: true,

    // Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
    interactionTracingEnabled: true,

    // Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
    networkRequestEnabled: true,

    // Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
    networkErrorRequestEnabled: true,

    // Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
    httpResponseBodyCaptureEnabled: true,

    // Optional:Enable or disable agent logging.
    loggingEnabled: true,

    // Optional:Specifies the log level. Omit this field for the default log level.
    // Options include: ERROR (least verbose), WARNING, INFO, VERBOSE, AUDIT (most verbose).
    logLevel: NREnums.LogLevel.INFO,

    // iOS Specific
    // Optional:Enable/Disable automatic instrumentation of WebViews
    webViewInstrumentation: true,

    // Optional:Set a specific collector address for sending data. Omit this field for default address.
    // collectorAddress: "",

    // Optional:Set a specific crash collector address for sending crashes. Omit this field for default address.
    // crashCollectorAddress: "",

    // Optional:Enable or disable sending JS console logs to New Relic.
    sendConsoleEvents: true,

    // Optional: nable or disable reporting data using different endpoints for US government clients.
    // fedRampEnabled: false
  }

  // newrelic can't start with agentConfiguration.
  NewRelicCapacitorPlugin.start({ appKey: appToken, agentConfiguration: agentConfig })
})
