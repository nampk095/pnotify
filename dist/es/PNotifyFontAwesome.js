/* src/PNotifyFontAwesome.svelte generated by Svelte v3.18.2 */
import { SvelteComponent, init, safe_not_equal } from "svelte/internal";

import { onDestroy, tick } from "svelte";
const position = "PrependContainer";
const defaults = {};

function instance($$self, $$props, $$invalidate) {
	let { self = null } = $$props;

	// This keeps the beforeUpdate handler from going into a loop when we're
	// taming Font Awesome's magic.
	let _updatingIcon = false;

	let _updatingSticker = false;

	// Save the old value of icon, so we can do our magic.
	let _oldIcon = self.icon === true ? self.getIcon(self.type) : self.icon;

	let _oldSticker = self.getIcon("sticker") + " " + (self.hide
	? self.getIcon("unstuck")
	: self.getIcon("stuck"));

	let newIcon;
	let newSticker;

	const removeIconHandler = self.on("pnotify:update", async () => {
		if (_updatingIcon) {
			return;
		}

		// Font Awesome 5 uses dark magic by replacing the icon element with an SVG.
		// In order to make it play nice with Svelte, we have to clear the element
		// and make it again.
		newIcon = self.icon === true ? self.getIcon(self.type) : self.icon;

		if (newIcon !== _oldIcon && typeof newIcon === "string" && newIcon.match(/(^| )fa[srlb]($| )/)) {
			$$invalidate(0, self.icon = false, self);
			_updatingIcon = true;
			await tick();
			$$invalidate(0, self.icon = newIcon, self);
			_updatingIcon = false;
		}

		// Update seved icon.
		_oldIcon = newIcon;
	});

	const removeStickerHandler = self.on("pnotify:update", async () => {
		if (_updatingSticker) {
			return;
		}

		// Font Awesome 5 uses dark magic by replacing the icon element with an SVG.
		// In order to make it play nice with Svelte, we have to clear the element
		// and make it again.
		newSticker = self.getIcon("sticker") + " " + (self.hide
		? self.getIcon("unstuck")
		: self.getIcon("stuck"));

		if (self.sticker && newSticker !== _oldSticker && typeof newSticker === "string" && newSticker.match(/(^| )fa[srlb]($| )/)) {
			$$invalidate(0, self.sticker = false, self);
			_updatingSticker = true;
			await tick();
			$$invalidate(0, self.sticker = true, self);
			_updatingSticker = false;
		}

		// Update seved icon.
		_oldSticker = newSticker;
	});

	onDestroy(() => {
		removeIconHandler && removeIconHandler();
		removeStickerHandler && removeStickerHandler();
	});

	$$self.$set = $$props => {
		if ("self" in $$props) $$invalidate(0, self = $$props.self);
	};

	return [self];
}

class PNotifyFontAwesome extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { self: 0 });
	}
}

export default PNotifyFontAwesome;
export { position, defaults };
//# sourceMappingURL=PNotifyFontAwesome.js.map