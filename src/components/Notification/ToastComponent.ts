// Virgo Toast Component
// ================================================================================================

import { NotificationComponent } from "./NotificationComponent";
import { DefaultNotificationConfig, NotificationConfig } from "./NotificationConfig";

/**
 * Toast component class.
 */
export class ToastComponent extends NotificationComponent {

	// [1] Component Static Properties
	// --------------------------------------------------------------------------------------------
	public static className: string = "toast";

	// [2] Component Instance Properties
	// --------------------------------------------------------------------------------------------
	public wrapper: HTMLElement;

	// [3] Component Static Methods
	// --------------------------------------------------------------------------------------------

	// [4] Component Instance Methods
	// --------------------------------------------------------------------------------------------

	constructor(config: NotificationConfig = DefaultNotificationConfig) {
		let componentConfig: NotificationConfig = {
			...DefaultNotificationConfig,
			flyer: {
				...DefaultNotificationConfig.flyer,
				x: 20,
				y: 20,
				base: "topRight"
			}
		}
		super(componentConfig);
	}

	// [5] Getter & Setter
	// --------------------------------------------------------------------------------------------

}