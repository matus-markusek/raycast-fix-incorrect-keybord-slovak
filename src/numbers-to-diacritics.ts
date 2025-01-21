import {
    Action,
    ActionPanel,
    Application,
    Cache,
    Clipboard,
    closeMainWindow,
    Color,
    environment,
    getFrontmostApplication,
    getPreferenceValues,
    getSelectedText,
    Icon,
    LaunchProps,
    List,
    popToRoot,
    showHUD,
    showToast,
    Toast,
    Keyboard,
} from "@raycast/api";
import { useEffect, useState } from "react";

export default function Command(props: LaunchProps) {
    showToast({
        style: Toast.Style.Failure,
        title: "Nothing to convert",
        message: "Please ensure that text is either selected or copied",
    });
}