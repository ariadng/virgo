// Virgo Notification Config
// ================================================================================================

import { BaseComponentConfig } from "../Base/BaseComponentConfig";
import { DefaultFlyerConfig, FlyerConfig } from "../Flyer/Flyer";

// [*] Component Config
// ------------------------------------------------------------------------------------------------
export interface NotificationConfig extends BaseComponentConfig {
	message?: string;
	showCloseButton?: boolean;
	flyer?: FlyerConfig;
}

// [*] Default Config
// ------------------------------------------------------------------------------------------------
export const DefaultNotificationConfig: NotificationConfig = {
	message: "Message",
	showCloseButton: true,
	flyer: {
		...DefaultFlyerConfig,
		timeout: 5000
	}
};