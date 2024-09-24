import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./App.tsx";
import { router } from "./router.tsx";
import { PublicClientApplication, LogLevel, EventType, AccountInfo } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import "./index.css";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
    authority: import.meta.env.VITE_MSAL_AUTHORITY,
    redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI ?? window.location.origin,
    navigateToLoginRequestUrl: false,
    postLogoutRedirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI ?? window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    secureCookies: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(level, message, containsPii);
      },
      logLevel: LogLevel.Error,
    },
  },
});

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    msalInstance.setActiveAccount(event.payload as AccountInfo);
  }

});

const rootHTML = document.getElementById("root");

if (!rootHTML) throw new Error("Root element not found");

ReactDom.createRoot(rootHTML).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>
);
