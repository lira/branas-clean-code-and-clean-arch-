import { createApp } from "vue";
import App from "./App.vue";
import RideGatewayHttp from "./infra/gateway/RideGatewayHttp";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import FetchAdapter from "./infra/http/FetchAdapter";
import GeolocationGatewayBrowser from "./infra/gateway/GeolocationGatewayBrowser";
const app = createApp(App);
const httpClient = new AxiosAdapter();
// const httpClient = new FetchAdapter();
app.provide("rideGateway", new RideGatewayHttp(httpClient));
app.provide("geolocationGateway", new GeolocationGatewayBrowser());
app.mount("#app");