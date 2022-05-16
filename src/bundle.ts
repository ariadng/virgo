import { BaseComponent } from "./components/Base/BaseComponent";
import { Flyer } from "./components/Flyer/Flyer";
import { ToastComponent as Toast } from "./components/Notification/ToastComponent";
import { TableComponent as Table } from "./components/Table/TableComponent";

BaseComponent.init();
Table.init();

// @ts-ignore
window.Virgo = {
	Flyer,
	Table,
	Toast
}

const a = new Toast();
a.flyer.show();