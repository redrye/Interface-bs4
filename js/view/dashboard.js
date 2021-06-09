import {getMapData} from "../maps";
import {Dashboard as DashTables} from "../config/datatables"
import {User} from "../models";
import {Buttons as TableButtons} from "../table";
import {default as View} from "./view";
import {Dashboard as Calendar} from "../calender";
import {Breadcrumb, Window} from '../navigation';
import {viewCard} from "../variables";

var init = function() {
		viewCard.fadeIn('slow');
		Window.resume();
};


export default {
	init
}
