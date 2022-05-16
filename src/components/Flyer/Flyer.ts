// Virgo Flyer

/**
 // ================================================================================================
 * Class to make elements fly.
 */
export class Flyer {

	// [1] Component Static Properties
	// --------------------------------------------------------------------------------------------

	// [2] Component Instance Properties
	// --------------------------------------------------------------------------------------------
	private element: HTMLElement;					// Element that will fly
	private wrapper: HTMLElement;					// Wrapper of the element
	private position: string;						// relative, fixed, sticky
	private timeout: number;						// How long a flyer last before auto hide (ms)
													// 0: display infinitely
	private autoCloseTimeoutId?: number;

	private reference?: HTMLElement | Element;		// Reference element to calculate coordinate

	private base: string;							// topLeft, topCenter, topRight
													// centerTop, center, centerRight
													// bottomLeft, bottomCenter, bottomRight 

	private x: number;								// x position from base
	private y: number;								// y position from base

	// [3] Component Static Methods
	// --------------------------------------------------------------------------------------------

	// [4] Component Instance Methods
	// --------------------------------------------------------------------------------------------

	/**
	 * Creates new Flyer instance.
	 * @param element - HTML Element that will fly
	 * @param config - Flyer configuration
	 */
	constructor(element: HTMLElement | Element, config: FlyerConfig = DefaultFlyerConfig) {
		// The element
		this.element = element as HTMLElement;
		// Configuration
		const flyerConfig = {...DefaultFlyerConfig, ...config};
		this.position = flyerConfig.position;
		this.timeout = flyerConfig.timeout;
		this.reference = flyerConfig.reference;
		this.base = flyerConfig.base;
		this.x = flyerConfig.x;
		this.y = flyerConfig.y;
		this.initElement();
	}

	private createWrapperElement(): HTMLElement {
		let wrapper = document.createElement("div");
		wrapper.classList.add("flyer-wrapper");
		return wrapper;
	}

	private initElement(): void {
		// Create wrapper & hide flyer before instructed otherwise
		this.wrapper = this.createWrapperElement();
		this.hide();
		// Add to DOM
		this.wrapper.appendChild(this.element);
		document.body.appendChild(this.wrapper);
		// Add events
		// Stop timeout on hover
		this.wrapper.addEventListener("mouseenter", () => {
			if (this.autoCloseTimeoutId !== null) {
				this.stopAutoClose();
			}
		});
		this.wrapper.addEventListener("mouseleave", () => {
			if (this.autoCloseTimeoutId === null) {
				this.startAutoClose();
			}
		});
	}

	private startAutoClose(): void {
		if (this.timeout > 0) {
			this.autoCloseTimeoutId = setTimeout(() => {
				this.close();
			}, this.timeout) as unknown as number;
		}
	}

	private stopAutoClose(): void {
		if (this.autoCloseTimeoutId !== null) {
			clearInterval(this.autoCloseTimeoutId);
			this.autoCloseTimeoutId = null;
		}
	}

	/**
	 * Hides flyer instance.
	 */
	public hide(): void {
		this.wrapper.style.display = "none";
	}

	/**
	 * Show flyer instance.
	 */
	public show(): void {
		this.updatePosition();
		this.startAutoClose();
	}

	/**
	 * Remove flyer from the DOM.
	 */
	public close(): void {
		this.wrapper.remove();
	}

	/**
	 * Update flyer position.
	 */
	private updatePosition(): void {
		this.wrapper.style.display = "block";
		this.wrapper.style.position = this.position;
		this.wrapper.style.top = this.top + "px";
		// [*] Horizontal alignment
		// - Right
		if (["topRight", "centerRight", "bottomRight"].includes(this.base)) {
			this.wrapper.style.left = "auto";
			this.wrapper.style.right = this.left + "px";
		}
		// - Center
		else if (["topCenter", "centerCenter", "bottomCenter"].includes(this.base)) {
			this.wrapper.style.left = this.left + "px";
		}
		// - Left (default)
		else {
			this.wrapper.style.left = this.left + "px";
		}
	}

	// [5] Getter & Setter
	// --------------------------------------------------------------------------------------------

	/**
	 * Top position
	 */
	private get top(): number {

		let value = 0;

		// [*] Top
		if (["topLeft", "topCenter", "topRight"].includes(this.base)) {
			value = this.y;
		}

		// [*] Center
		else if (["centerLeft", "center", "centerRight"].includes(this.base)) {
			value = this.y;
		}

		// [*] Bottom
		else if (["bottomLeft", "bottomCenter", "bottomRight"].includes(this.base)) {
			value = this.y;
		}

		return value;
	}

	/**
	 * Left position
	 */
	private get left(): number {

		let value = 0;

		// [*] Left
		if (["topLeft", "centerLeft", "bottomLeft"].includes(this.base)) {
			value = this.x;
		}

		// [*] Center
		else if (["topCenter", "center", "bottomCenter"].includes(this.base)) {
			value = this.x;
		}

		// [*] Right
		else if (["topRight", "centerRight", "bottomRight"].includes(this.base)) {
			value = this.x;
		}

		return value;

	}

}

/**
 * Flyer configuration interface.
 */
export interface FlyerConfig {
	position?: string;
	reference?: HTMLElement | Element;
	timeout?: number;
	base?: string;
	x?: number;
	y?: number;
}

/**
 * Default flyer configuration.
 */
export const DefaultFlyerConfig: FlyerConfig = {
	position: "fixed",
	reference: null,
	timeout: 0,
	base: "topRight",
	x: 0,
	y: 0
};