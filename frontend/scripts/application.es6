import 'core-js';
import m from 'mithril';
import { info, log, warn } from 'console';
let [w, d, domNode] = [window, document, document.querySelector.bind(document)];

class Application {
	constructor(){
		$(() => {$(d).foundation()})
	}
}


let app = new Application();