import { getSelectedText, showHUD, Clipboard } from "@raycast/api";

export async function getTextFromSelection() {
    try {
        return await getSelectedText();
    } catch (error) {
        return "";
    }
}

export async function getTextForReplacements() {
    let stringToBeChanged = "";

    try {
        const clipboard = await Clipboard.readText();
        const selected = await getTextFromSelection();

        if (selected !== "" && selected !== undefined && selected !== "\n") {
            stringToBeChanged = selected;
            await showHUD("Changing selected text! ✅");
        } else {
            if (clipboard !== "" && clipboard !== undefined && clipboard !== "\n") {
                stringToBeChanged = clipboard;
                await showHUD("Changing text from clipboard! ⭐");
            }
        }

        if (!stringToBeChanged) {
            await showHUD("⛔ No text is selected or present in clipboard! ⛔");
        }
    } catch (error) {
        await showHUD("⛔ Error! ⛔");
    }

    return String(stringToBeChanged);
}