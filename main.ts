import {Plugin} from "obsidian";
import {abapMode} from "codemirror-abap";

// Remember to rename these classes and interfaces!
export default class AbapSyntaxPlugin extends Plugin {
	async onload() {
		// @ts-ignore
		CodeMirror.defineMode("abap", abapMode);
	}

	onunload() {

	}
}
