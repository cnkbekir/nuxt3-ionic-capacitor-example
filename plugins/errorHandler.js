import { NewRelicCapacitorPlugin } from '@newrelic/newrelic-capacitor-plugin';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    // Record properties passed to the component if there are any
    if (vm.$options.propsData) {
      NewRelicCapacitorPlugin.recordBreadcrumb({
        name: "Props passed to component in error handler",
        eventAttributes: vm.$options.propsData
      });
    }

    // Get the lifecycle hook, if present
    let lifecycleHookInfo = 'none';
    if (info) {
      lifecycleHookInfo = info;
    }
    // Record a breadcrumb with more details such as component name and lifecycle hook
    NewRelicCapacitorPlugin.recordBreadcrumb({
      name: "Vue Error",
      eventAttributes: {
        componentName: vm.$options.name,
        lifeCycleHook: lifecycleHookInfo
      }
    });
    // Record the JS error to New Relic
    NewRelicCapacitorPlugin.recordError({
      name: err.name,
      message: err.message,
      stack: err.stack ? err.stack : "No stack available",
      isFatal: false,
      attributes: {
        "status": "pending",
        "escalate": false,
      },
    });
  }
})
