import { Resource } from "i18next";
import enGBAuth from "./enUS/auth.json";
import enGBCommon from "./enUS/common.json";
import enGBNotifications from "./enUS/notifications.json";
import enGBToasts from "./enUS/toasts.json";
import ptBRAuth from "./ptPT/auth.json";
import ptBRCommon from "./ptPT/common.json";
import ptBRNotifications from "./ptPT/notifications.json";
import ptBRToasts from "./ptPT/toasts.json";

export enum ELanguages {
  ptPT = "pt-PT",
  enUS = "en-US",
}

export enum ENamespaces {
  Auth = "auth",
  Common = "common",
  Notifications = "notifications",
  Toasts = "toasts",
}

export const ptPT = {
  [ENamespaces.Common]: ptBRCommon,
  [ENamespaces.Toasts]: ptBRToasts,
  [ENamespaces.Notifications]: ptBRNotifications,
  [ENamespaces.Auth]: ptBRAuth,
};

export const enUS = {
  [ENamespaces.Common]: enGBCommon,
  [ENamespaces.Toasts]: enGBToasts,
  [ENamespaces.Notifications]: enGBNotifications,
  [ENamespaces.Auth]: enGBAuth,
};

export const languages = [ELanguages.ptPT, ELanguages.enUS];

export const namespaces = [
  ENamespaces.Auth,
  ENamespaces.Common,
  ENamespaces.Notifications,
  ENamespaces.Toasts,
];

export const resources: Resource = {
  [ELanguages.ptPT]: ptPT,
  [ELanguages.enUS]: enUS,
};
