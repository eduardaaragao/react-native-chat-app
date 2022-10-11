import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  ELanguages,
  ENamespaces,
  languages,
  namespaces,
  resources,
} from "./helpers";

i18n.use(initReactI18next).init({
  resources,
  defaultNS: ENamespaces.Common,
  fallbackLng: ELanguages.enUS,
  // detection: {
  //   order: [
  //     "localStorage",
  //     "sessionStorage",
  //     "queryString",
  //     "cookie",
  //     "navigator",
  //     "path",
  //   ],
  // },
  ns: namespaces,
});

i18n.languages = languages;

export default i18n;
