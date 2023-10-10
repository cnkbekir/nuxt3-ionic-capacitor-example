<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p><ion-button @click="networkFailureHandler">network failure</ion-button></p>
      <p><ion-button @click="httpHandler">HTTP Transaction</ion-button></p>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { NewRelicCapacitorPlugin } from "@newrelic/newrelic-capacitor-plugin";

const networkFailureHandler = () => {
  NewRelicCapacitorPlugin.noticeHttpTransaction({
    url: "https://fakewebsite400.com",
    method: "GET",
    status: 400,
    startTime: Date.now(),
    endTime: Date.now(),
    bytesSent: 10000,
    bytesReceived: 20000,
    body: "fake http response body 400",
  });
};
const httpHandler = async () => {
    NewRelicCapacitorPlugin.noticeHttpTransaction({
      url: "https://fakewebsite201.com",
      method: "GET",
      status: 201,
      startTime: Date.now(),
      endTime: Date.now(),
      bytesSent: 10000,
      bytesReceived: 20000,
      body: "fake http response body 201",
    });
  }
</script>
