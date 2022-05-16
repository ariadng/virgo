// Virgo Notification Component
// ================================================================================================

import { BaseComponent } from "../Base/BaseComponent";
import { Flyer } from "../Flyer/Flyer";
import { DefaultNotificationConfig, NotificationConfig } from "./NotificationConfig";

/**
 * Notification component class.
 */
export class NotificationComponent extends BaseComponent {

	// [1] Component Static Properties
	// --------------------------------------------------------------------------------------------
	public static className: string = "notification";

	// [2] Component Instance Properties
	// --------------------------------------------------------------------------------------------
	private message: string;
	private showCloseButton: boolean;
	public flyer: Flyer;

	// [3] Component Static Methods
	// --------------------------------------------------------------------------------------------

	// [4] Component Instance Methods
	// --------------------------------------------------------------------------------------------

	constructor(config: NotificationConfig = DefaultNotificationConfig) {
		const componentConfig: NotificationConfig = { ...DefaultNotificationConfig, ...config };
		super(null, componentConfig);
		this.element = this.createElement(componentConfig);
		this.message = componentConfig.message;
		this.showCloseButton = componentConfig.showCloseButton;
		this.flyer = new Flyer(this.element, componentConfig.flyer);
	}

	private createElement(config: NotificationConfig): HTMLElement {
		// [*] Wrapper
		let wrapper = document.createElement("div");
		//@ts-ignore
		wrapper.classList.add(this.constructor.className);
		
		// [*] Content
		let content = document.createElement("div");
		content.classList.add("content");
		wrapper.appendChild(content);

		// [*] Message
		let message = document.createElement("div");
		message.classList.add("message");
		message.innerHTML = config.message;
		content.appendChild(message);

		// [*] Action
		let action = document.createElement("div");
		action.classList.add("action");
		wrapper.appendChild(action);

		// - Close Button
		if (config.showCloseButton) {
			let closeButton = document.createElement("button");
			closeButton.classList.add("close", "link", "small");
			closeButton.innerText = "Close";
			action.appendChild(closeButton);
			// Close flyer when the button is clicked
			closeButton.addEventListener("click", () => {
				this.flyer.hide();
			})
		}
		
		return wrapper;
	}

	// [5] Getter & Setter
	// --------------------------------------------------------------------------------------------

}