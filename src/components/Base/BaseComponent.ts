// Virgo Base Component
// ================================================================================================

import { BaseComponentConfig, DefaultComponentConfig } from "./BaseComponentConfig";
import { ComponentRegister } from "./ComponentRegister";

/**
 * Base class to be extended for other components.
 */
export class BaseComponent {

	// [1] Component Static Properties
	// --------------------------------------------------------------------------------------------
	public static defaultSelector: string 	= null;				// Component default CSS selector.
	public static className: string 		= "component";		// Component name.

	// [2] Component Instance Properties
	// --------------------------------------------------------------------------------------------
	public element: HTMLElement;			// It stores the component's DOM element.
	private config: BaseComponentConfig;	// Instance configuration.

	// [3] Component Static Methods
	// --------------------------------------------------------------------------------------------

	/**
	 * Get component's CSS selector.
	 */
	public static get selector(): string {
		return this.defaultSelector ? this.defaultSelector : ("." + this.className);
	}
	
	/**
	 * Initialize this component class.
	 */
	public static init(): void {
		const instances = document.querySelectorAll(this.selector);
		instances.forEach(element => {
			let instance = new this(element);
			ComponentRegister.register(this.className, instance);
		});
	}

	// [4] Component Instance Methods
	// --------------------------------------------------------------------------------------------

	constructor(element: HTMLElement | Element, config: BaseComponentConfig = DefaultComponentConfig) {
		this.element = element as HTMLElement;
		this.config = config;
	}

	// [5] Getter & Setter
	// --------------------------------------------------------------------------------------------

	public get id(): string {
		return this.element.dataset["id"] ? this.element.dataset["id"] : null;
	}

	public set id(id: string) {
		this.element.dataset["id"] = id;
	}

}