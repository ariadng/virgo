// Virgo Table Component
// ================================================================================================

import { BaseComponent } from "../Base/BaseComponent";
import { BaseComponentConfig } from "../base/BaseComponentConfig";

/**
 * Table component class.
 */
export class TableComponent extends BaseComponent {

	// [1] Component Static Properties
	// --------------------------------------------------------------------------------------------
	public static className: string = "table";
	public static wrapperClassName: string = "table-wrapper";

	// [2] Component Instance Properties
	// --------------------------------------------------------------------------------------------
	public wrapper: HTMLElement;
	
	// [3] Component Static Methods
	// --------------------------------------------------------------------------------------------
	
	// [4] Component Instance Methods
	// --------------------------------------------------------------------------------------------

	constructor(element: HTMLElement | Element, config: BaseComponentConfig = {}) {
		super(element, config);
		this.createWrapper();
	}

	createWrapper(): void {
		this.wrapper = document.createElement("div");
		this.wrapper.classList.add(TableComponent.wrapperClassName);
		this.element.before(this.wrapper);
		this.wrapper.append(this.element);
	}
	
	// [5] Getter & Setter
	// --------------------------------------------------------------------------------------------

}