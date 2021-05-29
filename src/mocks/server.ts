import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import activityLogs from "./activityLogs.json";
import events from "./events.json";
import notifications from "./notifications.json";
import profileInfo from "./profileInfo.json";
import userInfo from "./userInfo.json";
import users from "./users.json";

const now = Date.now();

function generateId() {
  return (Math.floor(Math.random() * 10000) + 1).toString();
}

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios, { delayResponse: 2000 });

// Activity
mock.onGet("/api/activity-logs").reply(200, activityLogs);

// Auth
mock.onPut("/api/password").reply(({ data }) => [200, data]);
mock.onPost("/api/forgot-password").reply(200);
mock.onPost("/api/forgot-password-submit").reply(200);
mock.onPost("/api/login").reply(200, "AUTHKEY123");
mock.onPost("/api/logout").reply(200);
mock.onPost("/api/register").reply(201);
mock
  .onGet("/api/user-info", { params: { key: "AUTHKEY123" } })
  .reply(200, userInfo);

// Events
mock.onDelete("/api/events").reply(({ data }) => [200, data]);
mock.onGet("/api/events").reply(
  200,
  events.map((e) => ({ ...e, start: now, end: now }))
);
mock
  .onPost("/api/events")
  .reply(({ data }) => [201, { ...JSON.parse(data), id: generateId() }]);
mock.onPut("/api/events").reply(({ data }) => [200, data]);

// Notifications
mock.onGet("/api/notifications").reply(200, notifications);

// Profile
mock.onGet("/api/profile-info").reply(200, profileInfo);
mock.onPut("/api/profile-info").reply(({ data }) => [200, data]);

// Users
mock.onDelete("/api/users").reply(({ data }) => [200, data]);
mock.onGet("/api/users").reply(200, users);
mock
  .onPost("/api/users")
  .reply(({ data }) => [201, { ...JSON.parse(data), id: generateId() }]);
mock.onPut("/api/users").reply(({ data }) => [200, data]);
