// Virgo Component Register
// ================================================================================================

import { BaseComponent } from "./BaseComponent";

/**
 * This class acts as global register for all components.
 */
export class ComponentRegister {

	// Stores all component instances.
	public static instances: any = {};

	// Register new component instance.
	public static register(className: string, component: BaseComponent): void {
		if (!this.instances[className]) this.instances[className] = [];
		component.id = className + "-" + this.instances[className].length;
		this.instances[className].push(component);
		console.log(this.instances);
	}

}