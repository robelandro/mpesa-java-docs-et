import { ShowCard } from "../../components/show-card";
import { Icon } from "@iconify/react";

export const SdkFeatures = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
      <ShowCard
        icon={
          <Icon
            icon="line-md:star-pulsating-twotone-loop"
            width="36"
            height="36"
            color="#3CB957"
          />
        }
        title="Getting Started"
        description="Get started with the M-Pesa API SDK for Java in minutes."
        href="/getting-started"
      />
      <ShowCard
        icon={
          <Icon
            icon="lets-icons:lock-duotone"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Secure Authentication"
        description="Fully managed authentication and access token management."
      />
      <ShowCard
        icon={
          <Icon
            icon="bxl:spring-boot"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Spring boot support"
        description="Out of box spring boot support"
        href="/spring-boot"
      />
      <ShowCard
        icon={
          <Icon
            icon="mdi:package-variant-closed"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Predefined Data Models"
        description="Includes ready-to-use models like UssdPushRequest, RegisterUrlRequest, and more."
        href="/docs/data-models"
      />
      <ShowCard
        icon={
          <Icon
            icon="mdi:cog-sync-outline"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Async & Sync API Support"
        description="Supports both synchronous and asynchronous API calls for optimal performance."
        href="/docs/methods#async-methods"
      />
      <ShowCard
        icon={
          <Icon
            icon="carbon:application-web"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Custom HTTP Client"
        description="Flexible and customizable HTTP client for M-Pesa API requests."
        href="/getting-started#example-4-custom-client"
      />
      <ShowCard
        icon={
          <Icon
            icon="mdi:shield-check"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Automatic Validation"
        description="Built-in validation for request integrity and error handling."
      />
      <ShowCard
        icon={
          <Icon
            icon="mdi:test-tube"
            width="36"
            height="36"
            style={{ color: "#3CB957" }}
          />
        }
        title="Comprehensive Testing"
        description="Includes tests using MockWebServer and real integration tests."
      />
    </div>
  );
};
