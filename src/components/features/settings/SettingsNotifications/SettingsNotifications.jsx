import React from "react";
import UnderConstructionMessage from "../../../shared/messages/UnderConstructionMessage/UnderConstructionMessage";

import CaretBackLink from "../../../shared/navigations/CaretBackLink/CaretBackLink";

const SettingsNotification = () => (
  <>
    <CaretBackLink href="/app/settings" title="Notifications" />
    <UnderConstructionMessage />
  </>
);

export default SettingsNotification;
