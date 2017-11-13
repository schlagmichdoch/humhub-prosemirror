/*
 * @link https://www.humhub.org/
 * @copyright Copyright (c) 2017 HumHub GmbH & Co. KG
 * @license https://www.humhub.com/licences
 *
 */

import markdownit from "markdown-it"
import emoji_plugin from "markdown-it-emoji"
import twemoji from "twemoji"
import imsize_plugin from "./plugins/imsize/markdownit.imsize"

let markdownRenderer = markdownit({html: false, breaks: true}).use(imsize_plugin).use(emoji_plugin);

markdownRenderer.renderer.rules.emoji = function(token, idx) {
    return twemoji.parse(token[idx].content);
};

export {markdownRenderer}
